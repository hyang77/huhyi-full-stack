import React from "react";
import brand from "../assets/images/brand.png";
import product from "../assets/images/product-sample.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <React.Fragment>
      <img src={brand} className="brand-picture" alt="brand" />

      <section className="aboutus-section-container">
        <h3 className="aboutus-section-title" data-aos="fade-up" data-aos-duration="2500">關於我們 About us</h3>
        <p data-aos="fade-up" data-aos-duration="2500">
          互怡企業有限公司創立於1991年，位於台南市仁德區，專營OA辦公家具、屏風、辦公桌、工作桌、工具車、椅子、效率櫃、鐵櫃、樹德產品、與辦公室週邊產品。
          「為客戶提供最優質與舒適辦公環境」是我們的信條，
          幫助客戶找到符合各自需求的辦公家具，並提供辦公空間規畫建議，從需求諮詢，
          家具選擇到規劃分析，提供最專業的服務。
        </p>
        <p data-aos="fade-up" data-aos-duration="2500">
          Huh-yi Enterprise Co.,Ltd was established in 1991 in Taiwan Tainan, is
          a professional office furniture supplier. Our products include office
          desks, meeting tables, task chairs, office cabinets, screens, and
          storage furniture. "To create the best and comfortable office
          environment for our customers", is the Huyi vision. We listen
          carefully to understand cutomers' needs, helping customers choose the
          suitable furniture, as well as providng with professional office space
          planning help. From office furniture consultation, selection to
          panning, we are dedicated to meet cutomers' expectations with superior
          service and products.
        </p>
      </section>
      <section className="featured-product-section-container">
        <h3 className="featured-product-section-title">
          <span>我們的產品</span>
          <span>Our products</span>
        </h3>
        <div className="featured-product-container">

          <div className="content featured-product-items" data-aos="zoom-in" data-aos-duration="1500">
            <Link to="/product/screens">
              <div className="content-overlay"></div>
              <img
                src={require("../assets/images/screens/ty0023.jpg")}
                className="featured-product-sample"
                alt="晶鑽系列 2.5CM"
              />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">
                  <span>屏風</span>
                  <span>Screens</span>
                </h3>
              </div>
            </Link>
          </div>

          <div className="content featured-product-items" data-aos="zoom-in" data-aos-duration="1500">
            <Link to="/product/chairs">
            <div className="content-overlay"></div>
              <img
                src={require("../assets/images/chairs/public-line-chairs/022b.jpg")}
                className="featured-product-sample"
                alt="排椅 022b"
              />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">
                  <span>椅子系列</span>
                  <span>Chairs</span>
                </h3>
              </div>
            </Link>
          </div>

          <div className="content featured-product-items" data-aos="zoom-in" data-aos-duration="1500">
            <Link to="/product/desks">
            <div className="content-overlay"></div>
              <img
                src={require("../assets/images/desks/office/cd-desks/AF-120-2-w.jpg")}
                className="featured-product-sample"
                alt="CD型辦公桌 AF-120-2-w"
              />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">
                  <span>辦公桌系列</span>
                  <span>Office Desks</span>
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <Link to="/product">
          <button type="button" className="btn btn-light mb-5">
            查看更多產品 Explore more
          </button>
        </Link>
      </section>
      <section className="space-section-container">
        <div className="space-div"></div>
      </section>
    </React.Fragment>
  );
}

export default HomePage;
