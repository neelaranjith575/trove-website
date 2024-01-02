import { Box, Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


const Craftmanship = () => {
    return (
        <>

            <Box sx={{ p: 4 }}>
                <Stack>
                    <Typography
                        sx={{
                            fontSize: '50px',
                            textAlign: 'center',
                            mb: 1, mt: 5,
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            fontFamily: "Cinzel",
                        }}>the Art of Tile Craftsmanship</Typography>
                    <Typography sx={{ fontSize: '16px', textAlign: 'center', mb: 5, fontFamily:'Montserrat' }}>Explore our artisans' process, 
                    creating timeless elegance in every tile, <br></br>blending tradition with innovation for inspiring spaces.
</Typography>
                </Stack>
                <Stack paddingTop={5} alignItems={"center"} >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gxflcmIiUVs?si=td4HumzUkvbwJVGL" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>

                </Stack>


            </Box>
        </>
    )
}
export default Craftmanship;