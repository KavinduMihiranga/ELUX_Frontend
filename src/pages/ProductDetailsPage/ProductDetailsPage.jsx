import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import cardOneImg from "../../assets/images/laptop01.jpg";
import cardTwoImg from "../../assets/images/laptop02.jpg";
import cardThreeImg from "../../assets/images/laptop03.jpg";
import cardFourImg from "../../assets/images/laptop04.jpg";
import Footer from "../../components/Footer/Footer";

function ProductDetailsPage() {
  return (
    <>
      <Navbar />

      <div className="mt-36 mb-12 max-sm:mt-24 flex w-full h-full items-center px-10 gap-16 max-sm:flex-wrap max-sm:gap-3">
        <div className="flex flex-row w-[50%] h-fit gap-3 justify-end max-sm:flex-wrap max-sm:w-full">
          {/* item sub image gallery */}
          <div className="w-[70px] flex flex-col gap-3 h-fit max-sm:flex-row max-sm:w-full max-sm:order-2">
            <div
              className="bg-cover bg-center object-cover h-[80px] w-full max-sm:w-[70px]"
              style={{ backgroundImage: `url(${cardOneImg})` }}
            ></div>
            <div
              className="bg-cover bg-center object-cover h-[80px] w-full max-sm:w-[70px]"
              style={{ backgroundImage: `url(${cardTwoImg})` }}
            ></div>
            <div
              className="bg-cover bg-center object-cover h-[80px] w-full max-sm:w-[70px]"
              style={{ backgroundImage: `url(${cardFourImg})` }}
            ></div>
            <div
              className="bg-cover bg-center object-cover h-[80px] w-full max-sm:w-[70px]"
              style={{ backgroundImage: `url(${cardThreeImg})` }}
            ></div>
          </div>

          {/* item main image */}
          <div className="w-[70%] h-[480px] max-md:h-[360px] max-sm:w-full max-sm:h-[500px] max-sm:order-1">
            <div
              className="bg-cover bg-center object-contain h-full w-full"
              style={{ backgroundImage: `url(${cardFourImg})` }}
            ></div>
          </div>
        </div>

        {/* item description / details */}
        <div className="w-[50%] flex flex-col gap-2 max-sm:w-full">
          <h6 className="text-base text-[#9B9B9B]">Item name</h6>
          <h4 className="text-2xl text-[#373737] font-bold">12$</h4>
          <p className="text-base text-[#9B9B9B]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            magnam at? Quas, quisquam non suscipit
          </p>
          <hr className="border-slate-100 border-1 my-2" />
          <h6 class="text-base text-[#5E5E5E]">
            Color : <span className="text-[#9B9B9B]">Black</span>{" "}
          </h6>
          <div className="flex flex-row justify-start flex-wrap gap-3 w-full my-0.5">
            <div className="w-[29px] h-[29px] rounded-full flex items-center justify-center">
              <div className="bg-[#A2AAAD] w-[24px] h-[24px] rounded-full cursor-pointer"></div>
            </div>
            <div className="w-[29px] h-[29px] rounded-full flex items-center justify-center">
              <div className="bg-[#E5E5E5] w-[24px] h-[24px] rounded-full cursor-pointer"></div>
            </div>
            <div className="w-[29px] h-[29px] rounded-full flex items-center justify-center">
              <div className="bg-[#D4AF37] w-[24px] h-[24px] rounded-full cursor-pointer"></div>
            </div>
            <div className="w-[29px] h-[29px] rounded-full flex items-center justify-center">
              <div className="bg-[#000000]  w-[24px] h-[24px] rounded-full cursor-pointer"></div>
            </div>
            <div className="w-[29px] h-[29px] rounded-full flex items-center justify-center">
              <div className="bg-[#E3D7E1]  w-[24px] h-[24px] rounded-full cursor-pointer"></div>
            </div>
            {/* <FilterColorItem itemColor="bg-[#626161]" />
            <FilterColorItem itemColor="bg-[#99DE9C]" /> */}
          </div>
          <h6 class="text-base text-[#5E5E5E]">
            Size : <span className="text-[#9B9B9B]">13</span>{" "}
          </h6>
          <div className="flex flex-row justify-start flex-wrap gap-3 w-full my-1">
            <div className="text-[#9B9B9B] border-[#9B9B9B] border py-1.5 text-sm px-6 rounded-full flex justify-center items-center cursor-pointer hover:text-black hover:border-black duration-300">
              11
            </div>
            <div className="text-[#9B9B9B] border-[#9B9B9B] border py-1.5 text-sm px-6 rounded-full flex justify-center items-center cursor-pointer hover:text-black hover:border-black duration-300">
              13
            </div>
            <div className="text-[#9B9B9B] border-[#9B9B9B] border py-1.5 text-sm px-6 rounded-full flex justify-center items-center cursor-pointer hover:text-black hover:border-black duration-300">
              14
            </div>
            <div className="text-[#9B9B9B] border-[#9B9B9B] border py-1.5 text-sm px-6 rounded-full flex justify-center items-center cursor-pointer hover:text-black hover:border-black duration-300">
              15.6
            </div>
            <div className="text-[#9B9B9B] border-[#9B9B9B] border py-1.5 text-sm px-6 rounded-full flex justify-center items-center cursor-pointer hover:text-black hover:border-black duration-300">
              17.3
            </div>
          </div>
          <h6 class="text-base text-[#5E5E5E]">Quantity</h6>
          <div className="flex flex-row justify-start flex-wrap gap-5 w-full my-1">
            <div className="text-[#9B9B9B] border-[#9B9B9B] border w-[50px] h-[50px] text-sm rounded-full flex justify-center items-center cursor-pointer duration-300 hover:bg-[#72c1e3] hover:border-[#49b4ca] hover:text-white">
              -
            </div>
            <div className="text-black text-sm rounded-full flex justify-center items-center">
              2
            </div>
            <div className="text-[#9B9B9B] border-[#9B9B9B] border w-[50px] h-[50px] text-sm rounded-full flex justify-center items-center cursor-pointer duration-300 hover:bg-[#72c1e3] hover:border-[#49b4ca] hover:text-white">
              +
            </div>
            <div className="w-[180px] text-[#9B9B9B] border-[#9B9B9B] border h-[50px] text-sm rounded-full flex justify-center items-center cursor-pointer duration-300 hover:bg-[#72bbe3] hover:border-[#72cae3] hover:text-white">
              Add to cart
            </div>
          </div>
          <div className="w-[350px] h-[50px] text-sm rounded-full flex justify-center items-center cursor-pointer bg-[#72c1e3] hover:bg-[#49b4ca] duration-300 text-white">
            Check out
          </div>
          {/* <ItemDetails /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailsPage;
