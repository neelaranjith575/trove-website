import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Stack } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/img/Careers/2017.webp"
import image2 from "../../assets/img/Careers/2019.webp"
import image3 from "../../assets/img/Careers/2020.webp"
import image4 from "../../assets/img/Careers/2022.webp"
import image5 from "../../assets/img/Careers/2023.webp"
import image6 from "../../assets/img/Careers/2024.webp"
import image7 from "../../assets/img/Careers/2024_july.webp"
import image8 from "../../assets/img/Careers/2024.webp"

const OurStory = () => {
    const cards = [
        {
            "image": `${image1}`,
            "time": "April 2017",
            "context": "Business Automation. With over two decades of experience, Trove took a significant leap in 2017 by integrating a cloud-based ERP system to the entire business process."
        },
        {
            "image": `${image2}`,
            "time": "October 2019",
            "context": "The Birth of Trove - First Franchise Pitch. The concept of Trove as a franchise-based retail brand began to take shape in 2019."
        },
        {
            "image": `${image3}`,
            "time": "June 2020",
            "context": "First Franchise Store in Bengaluru. TROVE launched its first-ever franchise store in the heart of Bengaluru."
        },
        {
            "image": `${image4}`,
            "time": "November 2022",
            "context": "First Franchise Outside Bengaluru. Venturing outside Bengaluru for the first time in November 2022 with the launch of a franchise in Shimoga."
        },
        {
            "image": `${image5}`,
            "time": "November 2023",
            "context": "Scaling Operations - 1 Acre Warehouse. TROVE's warehousing facility reached an impressive 1-acre size, with an inventory capacity of 25 lakh square feet."
        },
        {
            "image": `${image6}`,
            "time": "January 2024",
            "context": "Private Limited Company. TROVE officially became 'Trove Innovations India Private Limited,' reflecting growth and increased formalization."
        },
        {
            "image": `${image7}`,
            "time": "July 2024",
            "context": "First Franchise Outside Karnataka. Trove crossed state borders and launched its first franchise outside Karnataka in Kanchipuram, Tamil Nadu."
        },
        {
            "image": `${image8}`,
            "time": "October 2024",
            "context": "12+ Outlets, 130+ Employees, and 60 thousand plus happy clients."
        }
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box data-aos="fade-up" data-aos-duration="3000" py={5}>
            <Stack>
                <Typography
                    sx={{
                        color: "#1A1A1A",
                        fontSize: { xs: "28px", md: "45px" },
                        fontFamily: "Libre Baskerville",
                        textTransform: "uppercase",
                        textAlign: { xs: "center", md: "center" },
                        pb: 10,
                    }}
                >
                    Our Story
                </Typography>
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <Card key={index} sx={{ maxWidth: 345, margin: "0 10px", height: 400, borderRadius: '20px' }}>
                            <CardMedia
                                component="img"
                                image={card.image}
                                alt={card.time}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div" sx={{ fontFamily: 'Montserrat', textAlign: 'center' }}>
                                    {card.time}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Montserrat', textAlign: 'center' }}>
                                    {card.context}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Slider>
            </Stack>
        </Box>
    );
};

export default OurStory;
