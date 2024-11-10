import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import Image1 from "../../assets/img//features/middle2.webp"
import Image2 from "../../assets/img//features/middile1.webp"


const SliderTwo = () => {
    const banners = [
        { id: 1, imageUrl: `${Image1}` },
        { id: 2, imageUrl: `${Image2}` },
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
            <Box sx={{}}>
                <Carousel showDots={false} arrows={false} responsive={responsive}
                    autoPlay={true} // Enable auto-loop
                    autoPlaySpeed={3000} // Set auto-loop speed in milliseconds (optional)
                    infinite={true} // Enable infinite loop
                    transitionDuration={2000}
                >
                    {banners.map((banner) => (
                        <img key={banner.id} src={banner.imageUrl} alt={`Banner ${banner.id}`} style={{ width: '100%', height: "300px" }} />
                    ))}
                </Carousel>
            </Box>
        </>
    )
}

export default SliderTwo;
