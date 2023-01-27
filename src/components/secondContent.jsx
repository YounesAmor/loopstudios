import data from "../services/pictureService";
const SecondContent = () => {
  return (
    <div className="bg-white my-5">
      <h3 className="uppercase text-black font-josefin lg:text-left lg:pl-[125px] lg:text-4xl sm:text-2xl lg:mb-6">
        Our Creations
      </h3>
      <div className="grid sm:grid-cols-1 justify-center lg:grid-cols-4 lg:px-[125px] lg:gap-2">
        {data.map((element) => {
          const { id, imageDesktop, imageMobile, title } = element;
          return (
            <div className="flex lg:justify-start sm:justify-center relative">
              <picture id={title}>
                <source media="(min-width: 1000px)" srcSet={imageDesktop} />
                <source media="(min-width: 375px)" srcSet={imageMobile} />
                <img
                  src={imageMobile}
                  alt="imagealttext"
                  className="lg:w-[260px] lg:h-[450px] sm:mb-4 lg:mb-0 sm:w-[300px]"
                  key={id}
                />
                <p
                  id={id}
                  className="absolute text-white text-xl font-josefin text-left lg:bottom-10 lg:left-10 sm:bottom-5 sm:left-14"
                >
                  {title}
                </p>
              </picture>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondContent;
