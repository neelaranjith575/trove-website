import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import "./homeSlider.css"


const HomeSlider = () => {
    const banners = [
        { id: 1, imageUrl: "/assets/img/slider/Banner1.webp" },
        { id: 2, imageUrl: "/assets/img/slider/Banner2.webp" },
        { id: 3, imageUrl: "/assets/img/slider/Banner3.webp" },
        { id: 4, imageUrl: "/assets/img/slider/Banner4.webp"},
        { id: 5, imageUrl: "/assets/img/slider/Banner5.webp"},
        { id: 6, imageUrl: "/assets/img/slider/Banner6.webp"},
        // Add more banner objects as needed
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1.5,
            slidesToSlide: 1,
            style: {
                padding: '20px'
            }
            
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 1.5,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 1.5,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.5,
            slidesToSlide: 1,
        },
    };

    return (
        <>
            <Box sx={{ pl: {xs:3, md:12}, pr:{xs:3, md:12}, pt:{xs:3, md:5}, pb:{xs:4, md:5}}}>
                <Carousel showDots={true} arrows={false} responsive={responsive}
                autoPlay={true} // Enable auto-loop
                autoPlaySpeed={1500} // Set auto-loop speed in milliseconds (optional)
                infinite={true} // Enable infinite loop
                transitionDuration={500} 
                itemClass="carousel-item-padding-40"
                >
                    {banners.map((banner) => (
                        <img key={banner.id} src={banner.imageUrl} alt={`Banner ${banner.id}`} style={{ width:'100%', height: "550px" }} />
                    ))}
                </Carousel>
            </Box>
        </>
    )
}

export default HomeSlider;
