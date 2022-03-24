import Head from "next/head";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import LocationSelector from "../components/LocationSelector";
import Confirm from "../components/Confirm";
import RideSelector from "../components/RideSelector";

const style = {
  wrapper: `relative h-screen w-screen flex flex-col overflow-x-hidden`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideSelectorContainer: `h-full flex flex-col`,
  rideRequestContainer: `w-[400px] ml-[1rem] absolute py-[1rem] shadow-lg fixed bottom-0 left-0 justify-end z-20 overflow-hidden`,
  rideRequest: `max-h-[550px] bg-white rounded-t-lg flex flex-col`,
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Uber web3</title>
        <meta name="description" content="Uber Clone with web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.wrapper}>
        <Navbar />
        <div className={style.main}>
          <Map />
          <div className={style.rideRequestContainer}>
            <div className={style.rideRequest}>
              <LocationSelector />
              <RideSelector />
            </div>
            <Confirm />
          </div>
        </div>
      </div>
    </div>
  );
}
