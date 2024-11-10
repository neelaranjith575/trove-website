import { Grid, Paper, Stack, Typography, Box, Link } from "@mui/material";
import { ReactComponent as ArrowIcon } from "./../../assets/icons/svg/black.svg";
import { ReactComponent as ArrowIcon1 } from "./../../assets/icons/svg/Group 52.svg";
import Logo from "../../components/header/Logo";
import SocialIcons from "./SocialIcons";
import * as React from 'react';
import Button from "@mui/material/Button";
import { useLocation } from 'react-router-dom';









const Footer = (sideMenu) => {

    const location = useLocation();
    const Isfranchise = location.pathname === "/franchise";



    return (
        <>
            <Box sx={{ pt: 5, display: { xs: "none", md: 'block' } }}>

                {Isfranchise ? (
                    <Stack pl={10} pr={10} sx={{ textAlign: 'center', direction: 'row' }}>
                        {/* <Paper sx={{ backgroundColor: 'black', textAlign: 'center', borderRadius: '0px', boxShadow: 'none', p: 5, display: "flex", justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '35px', color: '#ffffff', fontFamily: "Libre Baskerville", fontWeight: 500, textTransform:'uppercase' }}>WANT TO EXPLORE THE OPPORTUNITY?</Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "0px",
                                    color: '#000000',
                                    width: "300px",
                                    height: "65px",
                                    fontSize: "20px",
                                    fontFamily: "Libre Baskerville",
                                    "&:hover": {
                                        backgroundColor: "#FACE4E",
                                    },
                                }}
                            >
                                GET STARTED
                                <ArrowIcon sx={{ color: "black",ml:2  }} />
                            </Button>
                        </Paper> */}
                        <Paper sx={{ backgroundColor: 'black', textAlign: 'center', borderRadius: '0px', boxShadow: 'none', p: 5 }}>
                            <Typography sx={{ fontSize: '35px', color: '#ffffff', fontFamily: "Libre Baskerville", fontWeight: 500 }}>
                                WANT TO EXPLORE THE OPPORTUNITY?</Typography>

                            {/* <a href="/locations" >
                            <Typography sx={{ fontSize: '18px', color: '#ffffff', fontFamily: 'Montserrat' }}>Find your nearest Trove <ArrowIcon1 sx={{ color: "white" }} /> </Typography>
                            </a> */}
                            <Button
                                // variant="contained"
                                sx={{
                                    backgroundColor: "#000000",
                                    borderRadius: "0px",
                                    color: '#ffffff',
                                    fontSize: "18px",
                                    fontFamily: 'Montserrat',
                                    textTransform: 'capitalize',
                                    fontWeight: 'normal',
                                    border: 'none',
                                    "&:hover": {
                                        backgroundColor: "#000000",
                                        color: '#ffffff',
                                        border: 'none',
                                    },
                                }}
                            >
                                GET STARTED
                                {/* <ArrowIcon sx={{ color: "white", }} /> */}
                                <ArrowIcon1 sx={{ color: "#ffffff", ml: 2 }} />
                            </Button>
                        </Paper>
                    </Stack>
                ) : (
                    <Stack pl={10} pr={10} sx={{ textAlign: 'center' }}>
                        <Paper sx={{ backgroundColor: 'black', textAlign: 'center', borderRadius: '0px', boxShadow: 'none', p: 5 }}>
                            <Typography sx={{ fontSize: '35px', color: '#ffffff', fontFamily: "Libre Baskerville", fontWeight: 500 }}>TAKE ONE STEP CLOSER TO YOUR DREAM HOME</Typography>

                            {/* <a href="/locations" >
                            <Typography sx={{ fontSize: '18px', color: '#ffffff', fontFamily: 'Montserrat' }}>Find your nearest Trove <ArrowIcon1 sx={{ color: "white" }} /> </Typography>
                            </a> */}
                            <Link to="https://www.google.com/maps/search/trove/" style={{
                                textDecoration: 'none', alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex'
                            }}>
                                <Button
                                    href="https://www.google.com/maps/search/trove/"
                                    // variant="outlined"
                                    sx={{
                                        backgroundColor: "#000000",
                                        borderRadius: "0px",
                                        color: '#ffffff',
                                        fontSize: "18px",
                                        fontFamily: 'Montserrat',
                                        textTransform: 'upperCase',
                                        fontWeight: 'normal',
                                        border: 'none',
                                        "&:hover": {
                                            backgroundColor: "#000000",
                                            color: '#ffffff',
                                            border: 'none',
                                        },
                                    }}
                                >
                                    Find your nearest Trove
                                    <ArrowIcon1 sx={{ color: "#ffffff", pl: 2 }} />
                                </Button>
                            </Link>
                        </Paper>
                    </Stack>
                )}
                <Stack pl={6} pr={6} pt={3} pb={3} alignItems="center" justifyContent="center">
                    <Grid container alignItems="center" justifyContent="center" spacing={10} >
                        <Grid item xs={4.5}>
                            <hr style={{ height: "10px", backgroundColor: 'black', opacity: 1 }} />
                        </Grid>

                        <Grid item xs={2.5} container alignItems="center" justifyContent="center">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Link to="/" style={{
                                    textDecoration: 'none', alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex'
                                }}>
                                    <Box
                                        component="img"
                                        src={require("../../assets/img/Logo/Trovelogo.png")}
                                        alt=""
                                        sx={{ width: "80%" }}
                                    />
                                </Link>

                            </Box>
                        </Grid>

                        <Grid item xs={4.5} >

                            <hr style={{ height: "10px", backgroundColor: 'black', opacity: 1 }} />
                        </Grid>
                    </Grid>
                </Stack>
                <Stack pl={6} pr={6} pt={1} pb={1} alignItems="center" justifyContent="center">
                    <Grid container alignItems="center" justifyContent="center" spacing={10} >
                        <Grid item xs={4.5}>

                        </Grid>

                        <Grid item xs={2.5} container alignItems="center" justifyContent="center">

                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
                                <SocialIcons />
                            </Box>
                        </Grid>

                        <Grid item xs={4.5} >


                        </Grid>
                    </Grid>
                </Stack>
                <Stack pl={20} pr={20} pb={2} pt={5}>
                    <div className="footer-title">
                        {/* <FooterNav /> */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                typography: 'body1',
                                color: "#0A142F",
                                pb: 5,
                                '& > :not(style) ~ :not(style)': {
                                    ml: 2,

                                },
                            }}

                        >
                            <Link href="/" underline="none" sx={{ color: "#1A1A1A", fontSize: '15px', fontWeight: 700, fontFamily: 'Montserrat', mr: 5 }}>
                                HOME
                            </Link>
                            <Link href="/franchise" underline="none" sx={{ color: "#1A1A1A", fontSize: '15px', fontWeight: 700, fontFamily: 'Montserrat', mr: 5 }}>
                                FRANCHISE
                            </Link>
                            <Link href="/experience" underline="none" sx={{ color: "#1A1A1A", fontSize: '15px', fontWeight: 700, fontFamily: 'Montserrat', mr: 5 }}>
                                EXPERIENCE
                            </Link>
                            <Link href="/all-products" underline="none" sx={{ color: "#1A1A1A", fontSize: '15px', fontWeight: 700, fontFamily: 'Montserrat', mr: 5 }}>
                                PRODUCTS
                            </Link>
                            <Link href="/careers" underline="none" sx={{ color: "#1A1A1A", fontSize: '15px', fontWeight: 700, fontFamily: 'Montserrat', mr: 5 }}>
                                CAREERS
                            </Link>
                            <Link href="/locations" underline="none" sx={{ color: "#1A1A1A", fontSize: '15px', fontWeight: 700, fontFamily: 'Montserrat', mr: 5 }}>
                                LOCATIONS
                            </Link>
                        </Box>
                        <h5 style={{ fontSize: '15px', color: '#0A142F', fontFamily: 'Montserrat ', textAlign: 'center' }}>© 2024. T R O V E® - All rights reserved.</h5>
                    </div>
                </Stack>

            </Box>


            {/* Mobile Version */}

            <Box sx={{ pt: 5, display: { xs: "block", md: 'none' } }}>
                {Isfranchise ? (
                    <Stack pl={5} pr={5} sx={{ textAlign: 'center', }}>
                        <Paper sx={{ backgroundColor: 'black', textAlign: 'center', borderRadius: '0px', boxShadow: 'none', p: 3, }}>
                            <Typography sx={{ fontSize: '16px', color: '#ffffff', fontFamily: "Libre Baskerville", fontWeight: 500, textTransform: 'uppercase' }}>WANT TO EXPLORE THE OPPORTUNITY?</Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "0px",
                                    color: '#000000',
                                    fontSize: "15px",
                                    textTransform: 'upperCase',
                                    fontFamily: "Libre Baskerville",
                                    mt: 1,
                                    "&:hover": {
                                        backgroundColor: "#FACE4E",
                                    },
                                }}
                            >
                                GET STARTED
                                <ArrowIcon sx={{ color: "black", ml: 2 }} />
                            </Button>
                        </Paper>
                    </Stack>
                ) : (
                    <Stack pl={5} pr={5} sx={{ textAlign: 'center' }}>
                        <Paper sx={{ backgroundColor: 'black', textAlign: 'center', borderRadius: '0px', boxShadow: 'none', p: 3 }}>
                            <Typography sx={{ fontSize: '16px', color: '#ffffff', fontFamily: "Libre Baskerville", fontWeight: 500 }}>TAKE ONE STEP CLOSER TO YOUR DREAM HOME</Typography>
                            {/* <a href="/locations" >
                            <Typography sx={{ fontSize: '10px', color: '#ffffff', fontFamily: 'Montserrat' }}>Find your nearest Trove <ArrowIcon1 sx={{ color: "white" }} /> </Typography>
                            </a> */}
                            <Link to="https://www.google.com/maps/search/trove/" style={{
                                textDecoration: 'none', alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex'
                            }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#FFFFFF",
                                        borderRadius: "0px",
                                        color: '#000000',
                                        fontSize: "11px",
                                        fontFamily: "Libre Baskerville",
                                        mt: 1,
                                        "&:hover": {
                                            backgroundColor: "#FACE4E",
                                        },
                                    }}
                                >
                                    Find your nearest Trove
                                    <ArrowIcon sx={{ color: "black", ml: 2, }} />
                                </Button>
                            </Link>
                        </Paper>
                    </Stack>
                )}

                <Stack pl={5} pr={5} pt={3} pb={3} alignItems="center" justifyContent="center">
                    <Grid container alignItems="center" justifyContent="center" spacing={2} >
                        <Grid item xs={4.5}>
                            <hr style={{ height: "10px", backgroundColor: 'black', opacity: 1 }} />
                        </Grid>

                        <Grid item xs={3}>
                            <Logo imageUrl="/assets/img/logo/Trovelogo.png" logoClass="logo" />

                        </Grid>

                        <Grid item xs={4.5} >

                            <hr style={{ height: "10px", backgroundColor: 'black', opacity: 1 }} />
                        </Grid>
                        <Stack sx={{ mt: 2 }}>
                            <SocialIcons />
                        </Stack>
                    </Grid>
                </Stack>
                <Stack pl={5} pr={5} pb={1}>
                    <div className="footer-title">
                        {/* <FooterNav /> */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                typography: 'body1',
                                color: "#0A142F",
                                pb: 3,
                                '& > :not(style) ~ :not(style)': {
                                    ml: 2,

                                },
                            }}

                        >
                            <Link href="/" underline="none" sx={{ color: "#0A142F", fontSize: '12px', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                HOME
                            </Link>
                            <Link href="/experience" underline="none" sx={{ color: "#0A142F", fontSize: '12px', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                EXPERIENCE
                            </Link>
                            <Link href="/franchise" underline="none" sx={{ color: "#0A142F", fontSize: '12px', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                FRANCHISE
                            </Link>
                            <Link href="/all-products" underline="none" sx={{ color: "#0A142F", fontSize: '12px', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                PRODUCTS
                            </Link>
                            <Link href="/careers" underline="none" sx={{ color: "#0A142F", fontSize: '12px', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                CAREERS
                            </Link>
                            <Link href="/locations" underline="none" sx={{ color: "#0A142F", fontSize: '12px', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                LOCATIONS
                            </Link>
                        </Box>
                        <h5 style={{ fontSize: '15px', color: '#0A142F', fontFamily: 'Montserrat', textAlign: 'center' }}>© 2024 . All rights reserved. Trove</h5>
                    </div>
                </Stack>


            </Box>
        </>
    )
}

export default Footer;