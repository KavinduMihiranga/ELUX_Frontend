import homebg from "./assets/images/laptopImage.jpg";
import BodyContent from "./components/BodyContent/BodyContent";
import Slider from "./components/Slider/Slider";
import ImageCard from "./components/ImageCard/ImageCard";
import cardOneImg from "./assets/images/laptop01.jpg";
import cardTwoImg from "./assets/images/laptop02.jpg";
import cardFourImg from "./assets/images/laptop03.jpg";
import HomeTitle from "./components/HomeTitle/HomeTitle";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BodyContent>
      <Navbar />

      <Slider
        sliderImage={homebg}
        sliderTitle="BIG SALE"
        sliderPara="Your Gateway to the Future of Computing"
      />

      <ServiceCard />

      <HomeTitle homeTitle="Top Products" />

      <div className="flex justify-center items-center gap-9 flex-wrap px-10">
        <ImageCard cardImg={cardTwoImg} cardPrice="$499.00" />
        <ImageCard cardImg={cardFourImg} cardPrice="$389.00" />
        <ImageCard cardImg={cardOneImg} cardPrice="$428.00" />
        <ImageCard cardImg={cardTwoImg} cardPrice="$319.00" />
      </div>

      <div className="flex justify-center items-center py-10">
        <Button
          btnName="View more"
          btnRounded="rounded-md"
          btnHidden="hidden max-sm:block"
        />
      </div>

      <Footer />
    </BodyContent>
  );
}

export default App;
