import React, { Fragment, useState, useEffect } from 'react';
import SEO from "../../components/seo";
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import { useLocation, useParams } from "react-router-dom";
import Loader from './Loader';
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Box } from '@mui/material';
import "./products.styles.css";


const API_BASE_URL = "http://tiipl.sixorbit.com/?urlq=service&version=1.0&key=123&task=variation/fetch&user_id=410001927&access_token=6774974255325507588&last_updated&limit=0&searchtext&limit_bit=1&default_limit=1000000&isvid=";

const ProductDetails = (spaceBottomClass) => {
    let { pathname } = useLocation();
    const { isvid } = useParams(); // Get the isvid from the URL
    const [productDetails, setProductDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch product details
    const fetchProductDetails = async (isvid) => {
        try {
            const response = await fetch(`${API_BASE_URL}${isvid}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProductDetails(data.data.variations[0]);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProductDetails(isvid);
    }, [isvid]);


    const productName = productDetails?.item_name
    const generateWhatsAppLink = (productName) => {
        const phoneNumber = '916366975407'
        const message = `Hello Team,\n\nI am interested in your tile products, especially the ${productName}. Could you please provide me with more information about your collections and current offers? Looking forward to hearing from you!\n\nThank you! 😊`;
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    return (
        <Fragment>
            <SEO
                titleTemplate="Product Detail"
                description="T R O V E® - The Ultimate Tile Studio"
            />
            <LayoutOne headerTop="visible">
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Products", path: process.env.PUBLIC_URL + "/all-products" },
                        { label: `${productDetails?.attributes?.find(attr => attr.attr_name === "Product id")?.attr_value}`, path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                {isLoading &&
                    <Loader />
                }
                {productDetails && (
                    <Box sx={{ paddingTop: { xs: "40px", md: "90px" } }}>
                        <div >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img
                                                src={`https://tiipl.sixorbit.com/${productDetails.image}`} alt={productDetails.variation_name}
                                                className="img-fluid"
                                                // height={450}
                                                // width={390}
                                                style={{ borderRadius: '5px' }}
                                            />
                                        </div>
                                    </div>


                                    <div className="col-lg-6 col-md-6">
                                        <div className="pro-details-list" style={{ padding: "10px" }}>

                                            <h3 style={{ fontFamily: 'Montserrat', }}><strong>{
                                                productDetails?.attributes?.find(attr => attr.attr_name === "Product id")?.attr_value
                                            }</strong></h3>
                                        </div>
                                        <div className="pro-details-list" style={{ padding: "10px", borderBottom: '1px solid grey' }}>
                                            <p style={{ fontFamily: 'Montserrat', fontSize: '15px' }}>With over two decades of industry experience, Trove prioritizes stability and authentic customer connections. Since our
                                                inaugural franchise in 2020, we've organically expanded to 12 thriving locations within three years.</p>
                                        </div>
                                        <div className="pro-details-list" style={{ padding: "15px", borderBottom: '1px solid grey' }}>
                                            <p style={{ fontFamily: 'Montserrat', fontSize: '15px' }}><strong>Size: </strong>{
                                                productDetails?.attributes?.find(attr => attr.attr_name === "Size")?.attr_value
                                            } MM</p>
                                            <p style={{ fontFamily: 'Montserrat', fontSize: '15px' }}><strong>Coverage:</strong> {productDetails?.measured_qty / 92903} {productDetails?.measured_unit} / {productDetails?.unit}</p >
                                            <p style={{ fontFamily: 'Montserrat', fontSize: '15px' }}><strong>Brand:</strong> {productDetails?.brand}</p>
                                            <p style={{ fontFamily: 'Montserrat', fontSize: '15px' }}><strong>Category:</strong> {productDetails?.category}</p>
                                        </div>

                                        <div className="pro-details-quality" style={{ padding: "15px", }}>
                                            <div className="pro-details-cart btn-hover" style={{ paddingTop: '20px' }}>
                                                <button style={{
                                                    fontWeight: 'bold',
                                                    lineHeight: 1,
                                                    zIndex: 99,
                                                    display: 'inline-block',
                                                    padding: '23px 30px 23px',
                                                    textTransform: 'uppercase',
                                                    color: '#fff',
                                                    border: 'none',
                                                    background: 'none',
                                                    backgroundColor: '#343538'
                                                }}>
                                                    {" "}
                                                    Enquire {" "}
                                                </button>

                                                <button
                                                    style={{
                                                        marginLeft: '25px',
                                                        fontWeight: 'bold',
                                                        lineHeight: 1,
                                                        zIndex: 99,
                                                        display: 'inline-block',
                                                        padding: '23px 30px 23px',
                                                        textTransform: 'uppercase',
                                                        color: '#fff',
                                                        border: 'none',
                                                        background: 'none',
                                                        backgroundColor: '#343538'
                                                    }}
                                                    onClick={() => window.open(generateWhatsAppLink(productName), '_blank')}

                                                >
                                                    {" "}
                                                    Whatsapp us {" "}
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className={clsx("description-review-area", spaceBottomClass)} style={{ paddingTop: '80px', paddingBottom: '50px' }}>
                                <div className="container" >
                                    <div className="description-review-wrapper">
                                        <Tab.Container defaultActiveKey="productDescription">
                                            <Nav variant="pills" className="description-review-topbar">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="productDescription" style={{
                                                        fontFamily: 'Montserrat',
                                                        textTransform: 'uppercase',
                                                        fontWeight: 600
                                                    }}>Additional Information</Nav.Link>
                                                </Nav.Item>
                                                {/* <Nav.Item>
                                                    <Nav.Link eventKey="additionalInfo">
                                                        Description
                                                    </Nav.Link>
                                                </Nav.Item> */}


                                            </Nav>
                                            <Tab.Content className="description-review-bottom">
                                                <Tab.Pane eventKey="productDescription">
                                                    <div className='products-des'>
                                                        <strong style={{ textTransform: 'uppercase' }}> Description :  </strong>
                                                        <p style={{ fontFamily: 'Montserrat', fontSize: '15px' }}>
                                                            With over two decades of industry experience, Trove prioritizes stability and authentic customer connections.
                                                            Since our inaugural franchise in 2020, we've organically expanded to 12 thriving locations within three years.
                                                            With over two decades of industry experience, Trove prioritizes stability and authentic customer connections.
                                                            Since our inaugural franchise in 2020, we've organically expanded to 12 thriving locations within three years.
                                                            With over two decades of industry experience, Trove prioritizes stability and authentic customer connections.
                                                            Since our inaugural franchise in 2020, we've organically expanded to 12 thriving locations within three years.
                                                            With over two decades of industry experience, Trove prioritizes stability and authentic customer connections.
                                                            Since our inaugural franchise in 2020, we've organically expanded to 12 thriving locations within three years.
                                                        </p>
                                                    </div>
                                                    <div className="product-anotherinfo-wrapper">
                                                        <ul>
                                                            {productDetails?.attributes?.map(attr => (
                                                                <li key={attr.aid}>
                                                                    <strong style={{ textTransform: 'uppercase', fontFamily: 'Montserrat' }}>{attr.attr_name}</strong> {attr.attr_value}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>

                )}
            </LayoutOne>
        </Fragment>
    );
}

export default ProductDetails;
