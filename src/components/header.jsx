import NavBar from "./navBar";

const Header = () => {
  return (
    <header className="lg:bg-heroDesktop h-[90vh] bg-cover bg-center bg-no-repeat sm:bg-heroMobile relative">
      <NavBar />
      <div className="w-full h-full flex flex-col justify-center">
        <h1
          className="lg:ml-[125px] text-white text-left font-josefin lg:py-8 lg:pr-14 lg:pl-8 lg:text-[50px] lg:w-1/3 uppercase border-4
        sm:text-[40px] sm:mx-9 sm:p-4 sm:border-2 "
        >
          Immersive <br /> experiences <br /> that deliver
        </h1>
      </div>
    </header>
  );
};

export default Header;
