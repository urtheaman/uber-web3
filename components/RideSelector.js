import Image from "next/image";
import { useEffect, useState } from "react";

const style = {
  wrapper: `flex flex-col select-none`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  car: `flex p-2 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  rideContainer: `overflow-y-scroll max-h-[300px] flex flex-col`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.5rem]`,
  ethLogo: `h-10 w-10 relative`,
};

const basePrice = 1542;

const RideSelector = () => {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/db/getRideTypes");
        const data = await res.json();
        setCarList(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.rideContainer}>
        {carList.map((car, index) => {
          return (
            <div key={index} className={style.car}>
              <Image
                src={car.iconUrl}
                className={style.carImage}
                height={50}
                width={50}
                alt="car image"
              />
              <div className={style.carDetails}>
                <div className={style.service}>{car.service}</div>
                <div className={style.time}>5 min away</div>
              </div>

              <div className={style.priceContainer}>
                <div className={style.price}>
                  {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
                </div>
                <div className={style.ethLogo}>
                  <Image
                    src="/assets/eth-logo.png"
                    alt="Eth"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RideSelector;
