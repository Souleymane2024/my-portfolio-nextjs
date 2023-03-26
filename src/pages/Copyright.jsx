import React from "react";
import { Link } from "react-scroll";
function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mx-auto text-center py-10 border-t-2 border-white ">
© Copyright {currentYear}. Made by
<Link to={0}  className =" border-b-2 border-black font-burtons cursor-pointer" > Souleymane Djibrine </Link>
</div>
  );
}

export default Copyright;
