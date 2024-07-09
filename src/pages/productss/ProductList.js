// src/components/ProductList.js
import  { useState, useEffect } from 'react';
import axios from 'axios';
import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://tiipl.sixorbit.com/?urlq=service&version=1.0&key=123&task=variation/fetch&user_id=410001927&access_token=6774974255325507588&last_updated&limit=&searchtext&limit_bit=1&default_limit=15`
      );

      console.log("API Response:", response); 

      if (response.data && response.data.data && response.data.data.variations) {
        const fetchedProducts = response.data.data.variations;

        
        fetchedProducts.forEach(product => {
          console.log(`Category: ${product.category}, Brand: ${product.brand}`);
        });

        setProducts(prevProducts => [...prevProducts, ...fetchedProducts]);
        setHasMore(fetchedProducts.length > 0);
      } else {
        console.error("Invalid response structure:", response);
        setHasMore(false);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading || !hasMore) return;
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <Fragment>
    <SEO
      titleTemplate="HOME"
      description="The Ultimste Tile Studio"
    />
    <LayoutOne headerTop="visible">
    <div>
      <h1>Product List</h1>
      <ul>
       {products.slice(0, 10).map(product => (
          <li key={product.isvid}>
            <h2>{product.item_name}</h2>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
    </LayoutOne>
    </Fragment>
  );
};

export default ProductList;
