import React, {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add, remove } from "./Redux/Action";
import ProductsList from "./product_list.json";


const ViewProduct = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();

  var productItem = ProductsList.filter((item) => parseInt(item.productId) === parseInt(id));
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);
  return (
    <div className="viewProduct">
      <div className="vpi"><img src={productItem[0].img} alt="" id="img-container" /></div>
      <div className="vpb">
        <div className="vpn">{productItem[0].name}</div>
        <div className="vpd">{productItem[0].description}Classic Fit Tartan Checked Casual Shirt</div>
        <hr className="hr1" />
        <div className="vpp">{productItem[0].discount!==""?`Rs:${parseInt(
              productItem[0].price -
                (parseInt(productItem[0].price) * parseInt(productItem[0].discount)) / 100
            )}`
              : `Rs. ${productItem[0].price}`}</div>
      </div>
      <div className="ppricee"
            style={{
              textDecoration: "line-through",
              color: "red",
            }}
          >
            {productItem[0].discount !== "" ? `Rs.${productItem[0].price}` : ``}
          </div>
      <div className="cartDetails">
        <div className="size">
          <div className="ssize">SELECT SIZE </div>
          <div className="flexsize">
            <div className="s1 s"><span className="ins">38</span></div>
            <div className="s2 s"><span className="ins">40</span></div>
            <div className="s3 s"><span className="ins">42</span></div>
            <div className="s4 s"><span className="ins">44</span></div>
            <div className="s5 s"><span className="ins">46</span></div>
          </div>
        </div>
      </div>
      <div className="bag">
        <button className="removeitem" onClick={() => dispatch(remove())}><i className="fa fa-shopping-bag" aria-hidden="true"></i>REMOVE FROM BAG</button>
        <button className="additem" onClick={() => dispatch(add())}><i className="fa fa-shopping-bag" aria-hidden="true"></i>ADD TO BAG</button>
      </div>
    </div>
  );
};

export default ViewProduct;
