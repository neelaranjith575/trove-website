import { Box, Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



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

            <Box sx={{ p: 4 }}>
                <Stack>
                    <Typography sx={{ fontSize: '50px', textAlign: 'center', mb: 1, mt: 10, fontWeight: 500, textTransform: 'uppercase' }}>features</Typography>
                    <Typography sx={{ fontSize: '16px', textAlign: 'center', mb: 5, }}>Lorem ipsum dolor sit amet consectetur.
                        Turpis sit mauris vitae sed. Quis a<br></br> feugiat mauris elit feugiat vivamus consequat turpis lorem.
                        Praesent est risus<br></br> nascetur sed at sem in commodo phasellus. Diam.</Typography>
                </Stack>
                <Stack paddingLeft={10} paddingTop={5} alignItems={"center"} >
                    <Grid container  >
                        <Grid item xs={4} >
                            <img src={images[0].src} width={376} height={269} />
                            <Typography sx={{ fontSize: '30px', color: '#1A1A1A', textTransform: 'uppercase' }}>{images[0].title}</Typography>
                            <Typography variant="caption" sx={{ fontSize: '30px', textDecoration: 'underline', textTransform: 'uppercase', color: '#1A1A1A' }}>{images[0].subtitle}</Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography sx={{ fontSize: '30px', color: '#1A1A1A', textTransform: 'uppercase' }}>{images[1].title}</Typography>
                            <Typography variant="caption" sx={{ fontSize: '30px', textDecoration: 'underline', textTransform: 'uppercase', color: '#1A1A1A' }}>{images[1].subtitle}</Typography>
                            <img src={images[1].src} width={376} height={269} />

                        </Grid>
                        <Grid item xs={4} >
                            <img src={images[2].src} width={376} height={269} />
                            <Typography sx={{ fontSize: '30px', color: '#1A1A1A', textTransform: 'uppercase' }}>{images[2].title}</Typography>
                            <Typography variant="caption" sx={{ fontSize: '30px', textDecoration: 'underline', textTransform: 'uppercase', color: '#1A1A1A' }}>{images[2].subtitle}</Typography>
                        </Grid>
                    </Grid>
                    <Stack sx={{ mt: 5 }}>
                        <Button variant="contained" endIcon={<SendIcon />}
                            sx={{
                                backgroundColor: '#1A1A1A',
                                borderRadius: '0px',
                                width: '375px',
                                height: '65px',
                                fontSize: '20px',
                            }}>View More</Button>
                    </Stack>
                </Stack>


            </Box>

        </>
    )
}
export default Features;