import React, { useEffect } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgHome1 from "../../Assets/ImgHome/hero1-deae5a1f.webp";
import ImgHome2 from "../../Assets/ImgHome/copy2.webp";
import ImgHome3 from "../../Assets/ImgHome/colpy3.webp";
import ImgHome4 from "../../Assets/ImgHome/copy4.webp";
import Card from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGet from "../../Custom Hooks/useGet";
import config from "../../Constants/enviroment";
import Skeleton from "../../Components/Skeleton/Skeleton";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
const Home = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n);
  const isRealyDark = useSelector(
    (state) => state.counter.isDark
    // localStorage.getItem("changeMode")
  );
  console.log(isRealyDark + " hhhh");
  const navigate = useNavigate();
  const [Products, loading] = useGet(config.allProducts, { limit: 3 });
  const handleProducts = () => {
    navigate("/Product");
  };
  const handleNavigate = (Id) => {
    navigate(`/${Id}`);
  };
  const products =
    Products &&
    Products.map((item) => (
      <div
        className="col"
        onClick={() => handleNavigate(item.id)}
        key={item.id}
      >
        <Card
          id={item.id}
          name={item.category}
          img={item.image}
          price={item.price}
        />
      </div>
    ));
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      {
        // <Skeleton />
      }
      <div
        className={
          isRealyDark == true
            ? "container-fluid light2"
            : " container-fluid dark2"
        }
      >
        <div className="row hero-home row-col-6">
          <div
            className={
              isRealyDark == true
                ? "hero-text col light2"
                : "hero-text col dark2"
            }
          >
            <h1
              className={
                isRealyDark == true
                  ? "home-main-line light3"
                  : "home-main-line dark3"
              }
            >
              {t("mainTitle")}
            </h1>
            <p className={isRealyDark == true ? "para light2" : "para dark2 "}>
              {t("mainPara")}
            </p>
            <div
              className={
                isRealyDark == true ? "home-btn light" : "home-btn dark"
              }
              onClick={handleProducts}
            >
              our products
            </div>
          </div>
          <div
            className={
              isRealyDark == true ? "col hero-img dark2" : "col hero-img dark1"
            }
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1.5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src={ImgHome1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgHome2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgHome3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgHome4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div
        className={
          isRealyDark == true
            ? "container-fluid light2"
            : " container-fluid dark2"
        }
      >
        <div className="row home-card">
          <div>
            <h3 className={isRealyDark == true ? " " : "dark-h3"}>
              Featured Products
            </h3>
            <hr />
          </div>
          <div className="special-card row row-col-4">
            {loading == true ? <Skeleton count={3} /> : products}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
