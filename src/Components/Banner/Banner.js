import React, { useState } from "react";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            {/* <span>ALL CATEGORIES</span> */}
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Cars">Cars</option>
              <option value="Cameras & Lenses">Cameras & Lenses</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">Tablets</option>
            </select>
            {/* <Arrow></Arrow>  */}
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
