import RideSelector from "./RideSelector";

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  confirmButtonContainer: `border-t-2 select-none p-4 bg-white rounded-b-lg z-10`,
  confirmButton: `bg-black w-full text-white p-4 text-center text-xl rounded-md`,
};

const Confirm = () => {
  const storeTripDetails = async () => {};

  return (
    <div className={style.wrapper}>
      <div className={style.confirmButtonContainer}>
        <button
          className={style.confirmButton}
          onClick={() => storeTripDetails()}
        >
          Confirm Uber
        </button>
      </div>
    </div>
  );
};

export default Confirm;
