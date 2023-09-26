import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8 ">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            src="/public/images/hero__1.webp"
            alt="Hero__1"
            className="w-full h-full object-contain rounded-md"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 ">
            <p className="text-2xl hidden sm:block">
              100 % Original Dry Fruits
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              {" "}
              Dried Fruits Best Quality{" "}
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <p className="text-red-600 text-4xl font-bold ">$18.36</p>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit  items-center flex gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />
              {""}
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/public/images/hero__2.webp"
            alt="Hero__2"
            className="w-full h-full object-contain rounded-md"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[30%] -translate-y-[30%] sm:space-y-4 ">
            <p className="text-2xl hidden sm:block font-bold">
              Best Yummy Pizza
            </p>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <p className="text-red-600 text-4xl font-bold ">$25</p>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit  items-center flex gap-4 px-4 py-2 text-[14px] sm:px-4 sm:py-2 cursor-pointer">
              Shop Now <BsArrowRight />{""}
            </div>
          </div>
        </div> 
        <div className="relative">
          <img
            src="/public/images/hero__3.webp"
            alt="Hero__3"
            className="w-full h-full object-contain rounded-md"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[30%] -translate-y-[30%] sm:space-y-4 ">
          <p className="text-2xl hidden sm:block font-bold">
              Best Yummy chips
          </p>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <p className="text-red-600 text-4xl font-bold">$10</p>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit  items-center flex gap-4 px-4 py-2 text-[14px] sm:px-4 sm:py-2 cursor-pointer">
              Shop Now <BsArrowRight />{""}
            </div>

          </div>
         </div> 
     </div>
  </div>  
  );
};
export default Hero;
