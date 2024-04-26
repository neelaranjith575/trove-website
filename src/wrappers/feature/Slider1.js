import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";


const SliderOne = () => {
    const banners = [
        { id: 1, imageUrl: "/assets/img/features/left1.webp" },
        { id: 2, imageUrl: "/assets/img/features/left1.webp" },
        // Add more banner objects as needed
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
            
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 1,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 1,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <>
            <Box sx={{ }}>
                <Carousel showDots={false} arrows={false} responsive={responsive}
                autoPlay={true} // Enable auto-loop
                autoPlaySpeed={1500} // Set auto-loop speed in milliseconds (optional)
                infinite={true} // Enable infinite loop
                transitionDuration={500} 
                >
                    {banners.map((banner) => (
                        <img key={banner.id} src={banner.imageUrl} alt={`Banner ${banner.id}`} style={{ width:'100%', height: "300px" }} />
                    ))}
                </Carousel>
            </Box>
        </>
    )
}

export default SliderOne;
