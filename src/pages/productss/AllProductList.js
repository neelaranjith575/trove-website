import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Container, Grid, Typography, Pagination } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";
import SEO from "../../components/seo";
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import Loader from "./Loader";
import { debounce } from 'lodash';

const API_BASE_URL = "http://tiipl.sixorbit.com/?urlq=service&version=1.0&key=123&task=variation/fetch&user_id=410001927&access_token=6774974255325507588&last_updated&limit=0&searchtext&limit_bit=1&default_limit=1000000";

const ProductList = ({ spaceBottomClass }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const PRODUCTS_PER_PAGE = 100;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_BASE_URL);
      if (response.data && response.data.data && response.data.data.variations) {
        const fetchedProducts = response.data.data.variations;
        setProducts(fetchedProducts);
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handlePageChange = debounce((event, value) => {
    setPage(value);
    navigate(`${pathname}?page=${value}`);
  }, 300);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProducts(query);
  };

  const sanitizeString = (str) => {
    return str.replace(/[-/(@\s]/g, "").toLowerCase();
  };

  const filterProducts = useCallback((query) => {
    if (!query) {
      setFilteredProducts([]);
      return;
    }

    const sanitizedQuery = sanitizeString(query);
    const filtered = products.filter(product => {
      const itemNameMatch = sanitizeString(product.item_name).includes(sanitizedQuery);
      const productIdMatch = product?.attributes?.some(attr => {
        return attr.attr_name === "Product id" &&
          sanitizeString(attr.attr_value).includes(sanitizedQuery);
      });

      return itemNameMatch || productIdMatch;
    });

    setFilteredProducts(filtered);
    setPage(1);
  }, [products, sanitizeString]);

  const currentProducts = searchQuery ? filteredProducts.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE) : products.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);
  const totalItems = searchQuery ? filteredProducts.length : products.length;
  const totalPages = Math.ceil(totalItems / PRODUCTS_PER_PAGE);

  return (
    <Fragment>
      <SEO
        titleTemplate="Products"
        description="T R O V E® - The Ultimate Tile Studio"
      />
      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Products", path: process.env.PUBLIC_URL + pathname }
          ]}
        />
        <Container>
          <Grid container spacing={{ xs: 10, md: 15 }} display={'flex'} alignItems={'center'} sx={{ paddingTop: '30px' }} >
            <Grid item xs={8} md={9}>
              <input
                type="text"
                placeholder="Search by Product Name or ID"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ width: '100%', padding: '10px', fontSize: '13px', borderRadius: '30px' }}
              />
            </Grid>
            <Grid item xs={4} md={3}>
              <Typography sx={{ fontSize: { xs: '13px', md: '15px' }, fontFamily: 'Montserrat', fontWeight: 500 }}>{searchQuery ? filteredProducts.length : products?.length} ITEMS</Typography>
            </Grid>
          </Grid>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Grid container spacing={3} sx={{ paddingTop: '30px' }}>
                {currentProducts.map((product, index) => (
                  <Grid item xs={6} sm={6} md={3} key={index}>
                    <div className={clsx("product-wrap", spaceBottomClass)}>
                      <div className="product-img">
                        <Link to={`${process.env.PUBLIC_URL}/product/${product?.isvid}`}>
                          <img
                            className="default-img"
                            src={`https://tiipl.sixorbit.com/${product.image}`}
                            alt=""
                            loading="lazy"
                            style={{ borderRadius: '5px' }}
                          />
                          {product.image.length > 1 ? (
                            <img
                              className="hover-img"
                              src={`https://tiipl.sixorbit.com/${product.image[1]}`}
                              alt=""
                              loading="lazy"
                              style={{ borderRadius: '5px' }}
                            />
                          ) : null}
                        </Link>
                        <div className="product-action">
                          <div className="pro-same-action pro-wishlist"></div>
                          <div className="pro-same-action pro-cart">
                            <Link to={`${process.env.PUBLIC_URL}/product/${product?.isvid}`}>
                              View Product
                            </Link>
                          </div>
                          <div className="pro-same-action pro-quickview"></div>
                        </div>
                      </div>
                      <Link to={`${process.env.PUBLIC_URL}/product/${product?.isvid}`}>
                        <Typography sx={{ fontSize: { xs: '12px', md: '15px' }, fontFamily: 'Montserrat', fontWeight: 500, textTransform: 'capitalize', pt: 0.5 }}>{product?.item_name}</Typography>
                      </Link>
                    </div>
                  </Grid>
                ))}
              </Grid>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  sx={{
                    marginTop: '50px',
                    marginBottom: '50px',
                    fontFamily: 'Montserrat',
                    '& .MuiPaginationItem-root': {
                      backgroundColor: '#f3f3f3',
                      borderRadius: '50%',
                      fontFamily: 'Montserrat',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#000000',
                        fontFamily: 'Montserrat',
                        color: 'white',
                      },
                      '&.Mui-selected': {
                        backgroundColor: '#ffbc00',
                        color: '#000000',
                        fontFamily: 'Montserrat',
                      },
                    },
                  }}
                />
              </div>
            </>
          )}
        </Container>
      </LayoutOne>
    </Fragment>
  );
};

export default React.memo(ProductList);
