import React from "react";
import { Link } from "react-router-dom";
import ProductsList from "./product_list.json";

const Home = () => {
  return (
    <div className="home">
      {ProductsList.map((data, index) => (
        <div className="box">
          <div key={data.productId}>
            <Link to={`/viewproduct/${data.productId}`} key={data.productId} className="hcc1">
              <img src={data.img}className="productImg" width="280" height="400" alt=""/>
            </Link>
          </div>
          <div className="pname">{data.name}</div>
          <div className="pdiscount">
            {data.discount !== "" ? `Rs.${parseInt(data.price -(parseInt(data.price) * parseInt(data.discount)) / 100)}`: `Rs. ${data.price}`}
          </div>
          <div className="pprice" style={{textDecoration: "line-through",color: "red"}}>
            {data.discount !== "" ? `Rs.${data.price}` : ``}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
