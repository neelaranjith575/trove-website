import PropTypes from "prop-types";
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";
import axios from 'axios';

const ProductGridListSingle = ({
  product,
  currency,
  wishlistItem,
  compareItem,
  spaceBottomClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);


  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  const API_BASE_URL="http://tiipl.sixorbit.com/?urlq=service&version=1.0&key=123&task=variation/fetch&user_id=410001927&access_token=6774974255325507588&last_updated&limit=0&searchtext&limit_bit=1&default_limit=100"

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}`
      );

      console.log("API Response:", response); // Log the full response

      if (response.data && response.data.data && response.data.data.variations) {
        const fetchedProducts = response.data.data.variations;

        // Log category and brand for each product
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
        <div className={clsx("product-wrap", spaceBottomClass)}>
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img
                className="default-img"
                src={process.env.PUBLIC_URL + product.image[0]}
                alt=""
              />
              {product.image.length > 1 ? (
                <img
                  className="hover-img"
                  src={process.env.PUBLIC_URL + product.image[1]}
                  alt=""
                />
              ) : (
                ""
              )}
            </Link>
           

            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
              </div>
              <div className="pro-same-action pro-cart">
                <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>
                   View Product
                  </Link>
              </div>
              <div className="pro-same-action pro-quickview">
              </div>
            </div>
          </div>
        
          <div className="product-content text-center">
          {products.slice(0, 9).map(product => (
            <h3>
                {product?.brand}  
            </h3>
          ))}
            
          </div>
        </div>
        <div className="shop-list-wrap mb-30">
          <div className="row">
            <div className="col-xl-4 col-md-5 col-sm-6">
              <div className="product-list-image-wrap">
                <div className="product-img">
                  <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                    <img
                      className="default-img img-fluid"
                      src={process.env.PUBLIC_URL + product.image[0]}
                      alt=""
                    />
                    {product.image.length > 1 ? (
                      <img
                        className="hover-img img-fluid"
                        src={process.env.PUBLIC_URL + product.image[1]}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-7 col-sm-6">
              <div className="shop-list-content">
                <h3>
                  <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                    {product.name}
                  </Link>
                </h3>
               
                

                {product.shortDescription ? (
                  <p>{product.shortDescription}</p>
                ) : (
                  ""
                )}

                <div className="shop-list-actions d-flex align-items-center">
                  <div className="shop-list-btn btn-hover">
                    <Link
                        to={`${process.env.PUBLIC_URL}/product/${product.id}`}
                      >
                        View Product
                      </Link>
                  </div>

                  <div className="shop-list-wishlist ml-10">
                  </div>
                  <div className="shop-list-compare ml-10">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      />
    </Fragment>
  );
};

ProductGridListSingle.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.shape({})
};

export default ProductGridListSingle;
