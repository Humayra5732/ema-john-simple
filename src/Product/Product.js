import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    console.log(props);
    const {img , name ,seller , price , stock} = props.product;

    return (
        <div className="product">
            <div>
               {/* <img src={props.product.img} alt="" />  */}
               <img src={img} alt="" />
            </div>
            <div>
            {/* <h2>{props.product.name}</h2> */}
            <h2 className="product-name">{name}</h2>
            <p><small>by:{seller}</small></p>
            <p>${price}</p>
            <br />
            <p><small>Only {stock} left in the stock - order soon!</small></p>
            <button className="main-button" 
            onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />add  to cart</button>

            </div>
        </div>
    );
};

export default Product;