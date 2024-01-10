import { Box, Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const images = [
    {
        title: "Tailored ",
        subtitle: "Customization Suite",
        src: "/assets/img/features/image 32.png",
        alt: "Image 1",
    },
    {
        title: "Seamless Installation",
        subtitle: "Support",
        src: "/assets/img/features/image 33.png",
        alt: "Image 2",
    },
    {
        title: "Eco-conscious",
        subtitle: "Material Sourcing",
        src: "/assets/img/features/image 34.png",
        alt: "Image 3",
    },
];

const Features = () => {
    return (
        <>
            <Box>
                <Stack>
                    <Typography sx={{ fontSize: { xs: '30px', md: '50px' }, textAlign: 'center', mb: 1, mt: 10, fontWeight: 500, textTransform: 'uppercase', fontFamily: "Libre Baskerville" }}>features</Typography>
                    <Typography sx={{ fontSize: { xs: '13px', md: '16px' }, textAlign: 'center', mb: 5, fontFamily: 'Montserrat' }}>Lorem ipsum dolor sit amet consectetur. Turpis sit mauris vitae sed. Quis a<br></br> feugiat mauris elit feugiat vivamus consequat turpis lorem. Praesent est risus<br></br> nascetur sed at sem in commodo phasellus. Diam.</Typography>
                </Stack>
                <Stack paddingTop={5} alignItems={"center"}  >
                    <Grid container spacing={10} >
                    {images.map((image, index) => (
    <Grid item key={index} xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
        {index === 1 ? (
            <>
                <Typography
                    sx={{
                        fontSize: { xs: '20px', md: '30px' },
                        color: '#1A1A1A',
                        textTransform: 'uppercase',
                        fontFamily: 'Cinzel',
                        textAlign: { xs: 'center', md: 'left' }, // Align left for md screens and center for xs screens
                    }}
                >
                    {image.title}
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        fontSize: { xs: '20px', md: '30px' },
                        textDecoration: 'underline',
                        textTransform: 'uppercase',
                        color: '#1A1A1A',
                        fontFamily: 'Cinzel',
                        textAlign: { xs: 'center', md: 'left' }, // Align left for md screens and center for xs screens
                    }}
                >
                    {image.subtitle}
                </Typography>
            </>
        ) : null}
        <img src={image.src} alt={image.alt} width={376} height={269} />
        {index !== 1 ? (
            <>
                <Typography
                    sx={{
                        fontSize: { xs: '20px', md: '30px' },
                        color: '#1A1A1A',
                        textTransform: 'uppercase',
                        fontFamily: 'Cinzel',
                        textAlign: { xs: 'center', md: 'left' }, // Align left for md screens and center for xs screens
                    }}
                >
                    {image.title}
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        fontSize: { xs: '20px', md: '30px' },
                        textDecoration: 'underline',
                        textTransform: 'uppercase',
                        color: '#1A1A1A',
                        fontFamily: 'Cinzel',
                        textAlign: { xs: 'center', md: 'left' }, // Align left for md screens and center for xs screens
                    }}
                >
                    {image.subtitle}
                </Typography>
            </>
        ) : null}
    </Grid>
))}


                    </Grid>
                    <Stack sx={{ mt: 5 }}>
                        <Button variant="contained" endIcon={<ArrowForwardIcon sx={{ color: 'white' }} />}
                            sx={{
                                backgroundColor: '#1A1A1A',
                                borderRadius: '0px',
                                width: '375px',
                                height: '65px',
                                fontSize: '20px',
                                fontFamily: 'Libre Baskerville',
                                '&:hover': {
                                    backgroundColor: '#FACE4E',
                                }
                            }}>View More</Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

export default Features;
