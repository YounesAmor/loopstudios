const FirstContent = () => {
  return (
    <div className="bg-white flex lg:flex-row sm:flex-col relative justify-center items-center sm:my-[70px] lg:mx-[100px] my-[100px]">
      <img
        src={require("../assets/images/desktop//image-interactive.jpg")}
        alt="interactive man"
        className="lg:w-[800px] sm:w-[330px]"
      />
      <div className="border text-center mx-2 lg:ml-5 border-transparent font-josefin bg-white sm:p-4 lg:p-12 lg:absolute lg:top-[320px] lg:right-[-90px] lg:w-[600px]">
        <h2 className="text-black sm:text-2xl tracking-widest lg:text-[40px] uppercase sm:mb-3">
          The leader in interactive VR
        </h2>
        <p className="lg:text-sm lg:text-md">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default FirstContent;
