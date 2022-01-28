import React from "react";
import fondo from "../img/teatro.png";
import { TopTenSection } from "../styles/TopTen";

const TopTen = () => (
  <TopTenSection>
    <div className="cancha">
       <img src={fondo} alt="fondo" />
    </div>
  </TopTenSection>
);





export default TopTen;
