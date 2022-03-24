import Image from "next/image";

const style = {
  wrapper: `h-16 py-2 w-full bg-black text-white flex md:justify-around items-center px-60 z-20`,
  leftMenu: `flex items-center`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white flex font-light items-center mx-4 cursor-pointer`,
  rightMenu: `flex items-center`,
  userImageContainer: `relative ml-6 mr-2 w-10 h-10`,
  userImage: `rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center justify-center cursor-pointer rounded-full hover:bg-[#333] px-4 py-1`,
  loginText: `text-sm font-light`,
};

const currentAccount = "0x8d80B2b84e8968569E2863598887f7Fe66C61216";

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>Uber</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>

      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>Lance</div>
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src="/man.png"
            layout="fill"
            alt="user"
          />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <button className={style.loginButton}>
            <p className={style.loginText}>Log in</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
