import React from "react";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <React.Fragment>
      <section className="footer-section-container">
        <div className="footer-info-container">
          <div className="footer-info-details">
            <p>聯絡我們</p>
            <p>huhyitw@gmail.com</p>
            <p>傳真: 06-2791648, 06-2491580 </p>
            <p>電話: 06-2791828 </p>
          </div>
          <div className="footer-info-details">
              <p>營業時間</p>
              <p>早上 8:30 ~ 晚上 5:30 (周一到週五)</p>
          </div>
          <div className="footer-info-details">
              <p>公司地址</p>
              <p>(717) 台南市仁德區太新路82號</p>
              <Link to="/contact"><p id="seeMap">查看地圖</p></Link>
              
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Footer;
