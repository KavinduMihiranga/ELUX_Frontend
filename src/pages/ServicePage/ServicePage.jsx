import React from "react";
import BodyContent from "../../components/BodyContent/BodyContent";
import servicebg from "../../assets/images/customerCare.jpg";
import Navbar from "../../components/Navbar/Navbar";
import ServiceItem from "../../components/ServiceCard/ServiceItem";
import cardOneImg from "../../assets/images/FreeShipping.png";
import cardTwoImg from "../../assets/images/customerService.png";
import cardThreeImg from "../../assets/images/MoneyBack.png";
import Footer from "../../components/Footer/Footer";

function ServicePage() {
  return (
    <BodyContent>
      <Navbar />

      <div className="flex justify-center items-center">
        <img
          src={servicebg}
          alt=""
          className="w-full bg-cover h-dvh object-cover"
        />
        <div className="absolute text-center flex justify-center bottom-0 pb-20 items-center gap-14 w-3/4 flex-wrap max-md:gap-8 max-sm:gap-5">
          <ServiceItem
            ServiceImg={cardOneImg}
            serviceBg="bg-[#ffffff81]"
            ServiceName="Free shipping worldwide"
            ServiceDescription="Lorem ipsum dolor sit amet"
          />
          <ServiceItem
            ServiceImg={cardTwoImg}
            serviceBg="bg-[#ffffff81]"
            ServiceName="24/7 customer service"
            ServiceDescription="Lorem ipsum dolor sit amet"
          />
          <ServiceItem
            ServiceImg={cardThreeImg}
            serviceBg="bg-[#ffffff81]"
            ServiceName="Money back guarantee"
            ServiceDescription="Lorem ipsum dolor sit amet"
          />
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </BodyContent>
  );
}

export default ServicePage;
