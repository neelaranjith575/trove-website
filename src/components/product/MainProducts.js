import PropTypes from "prop-types";
import { Fragment, useState, useEffect } from "react";
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
  const [totalPages, setTotalPages] = useState(0);
  const limit = 15;

  const API_BASE_URL = "http://tiipl.sixorbit.com/";

  const fetchProducts = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(API_BASE_URL, {
        params: {
          urlq: 'service',
          version: '1.0',
          key: '123',
          task: 'variation/fetch',
          user_id: '410001927',
          access_token: '6774974255325507588',
          last_updated: '',
          limit: 0,
          searchtext: '',
          limit_bit: 1,
          default_limit: limit,
          page: page
        }
      });

      if (response.data && response.data.data && response.data.data.variations) {
        const fetchedProducts = response.data.data.variations;
        const totalItems = response.data.data.total_items; // Adjust based on API response structure


        console.log(totalItems, "totalItems")

        setProducts(fetchedProducts);
        setTotalPages(Math.ceil(totalItems / limit));
      } else {
        console.error("Invalid response structure:", response);
        setProducts([]);
        setTotalPages(0);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
      setTotalPages(0);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading && products.length === 0) return <div>Loading...</div>;
  if (!loading && products.length === 0) return <div>No products found.</div>;

  return (
    <Fragment>

      {products.map((fetchedProduct, index) => (
        <div key={index}>
          <img
            className="hover-img"
            src={`https://tiipl.sixorbit.com/${fetchedProduct.image}`}
            alt=""
          />
          <h3>{fetchedProduct?.item_name}</h3>
        </div>
      ))}

      {/* <div className="product-content text-center"> */}
      {products.map((fetchedProduct, index) => (
        <div key={index}>
          <img
            className="hover-img"
            src={`https://tiipl.sixorbit.com/${fetchedProduct.image}`}
            alt=""
          />
          <h3>{fetchedProduct?.item_name}</h3>
        </div>
      ))}
      {/* </div> */}
      {/* <div className={clsx("product-wrap", spaceBottomClass)}>
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
          {products.map((fetchedProduct, index) => (
            <div key={index}>
              <h3>{fetchedProduct?.item_name}</h3>
              <img
                className="hover-img"
                src={`https://tiipl.sixorbit.com/rpkfiles/variations/small_thumbnail/${fetchedProduct.image}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div> */}
      {/* <div className="shop-list-wrap mb-30">
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
      </div> */}
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
      <div className="pagination-wrap text-center mt-20">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={clsx({ 'active': page === index + 1 })}
            disabled={loading}
          >
            {index + 1}
          </button>
        ))}
      </div>
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
