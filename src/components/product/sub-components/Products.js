
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import clsx from "clsx";

const Products = (spaceBottomClass) => {
  const [productsList, setProductsList] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://tiipl.sixorbit.com/?urlq=service&version=1.0&key=123&task=variation/fetch&user_id=410001927&access_token=6774974255325507588&last_updated&limit=10&searchtext&limit_bit=0');
        setProductsList(response.data); 
        console.log(response, 'Productsss')

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
    <div className={clsx("product-wrap", spaceBottomClass)}>
      <h1>Hello Products</h1>
      {productsList.map(product => (
        <div key={product.id} className="product">
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              {/* <img
                className="default-img"
                src={process.env.PUBLIC_URL + product.image[0]}
                alt=""
              /> */}
               <img  className="default-img" src={product.thumbnail} alt={product.title} />
              {/* {product.image.length > 1 && (
                <img
                  className="hover-img"
                  src={process.env.PUBLIC_URL + product.image[1]}
                  alt=""
                />
              )} */}
            </Link>
            {(product.discount || product.new) && (
              <div className="product-img-badges">
                {product.discount && <span className="badge discount">Discount</span>}
                {product.new && <span className="badge new">New</span>}
              </div>
            )}
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                {product.title}
              </Link>
            </h3>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Products;
