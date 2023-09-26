const Banner = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 ">
        <div className="overflow-hidden rounded-lg">
          <img
            src="/public/images/banner__1.webp"
            alt="banner_1"
            className="hover:scale-105 transition-transform"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="/public/images/banner__2.webp"
            alt="banner_1"
            className="hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
