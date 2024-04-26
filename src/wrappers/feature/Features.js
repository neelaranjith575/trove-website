import { Box, Grid, Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { ReactComponent as ArrowIcon } from "./../../assets/icons/svg/Group 52.svg";
import SliderOne from "./Slider1";
import SliderTwo from "./Slider2";
import SliderThree from "./Slider3";


const Features = () => {
  return (
    <>
   <Box  sx={{pl:{xs:5, md:10}, pr:{xs:5, md:10}, pt:{xs:5, md:10}, pb:{xs:5, md:5},height:'fit-content'}}>
  <Stack sx={{ mb: 5,}}>
    <Typography
      sx={{
        fontSize: { xs: "30px", md: "50px" },
        textAlign: "center",
        fontWeight: 500,
        textTransform: "uppercase",
        fontFamily: "Libre Baskerville",
      }}
    >
      SEARCHING YOUR DREAM DESIGN?
    </Typography>
  </Stack>
  <Grid container spacing={10} justifyContent="center" sx={{display:{xs:'none',md:"flex"}}}>
    <Grid item xs={4}>
      <SliderOne />
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          color: "#1A1A1A",
          textTransform: "uppercase",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        THE ULTIMATE
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          textDecoration: "underline",
          textTransform: "uppercase",
          color: "#1A1A1A",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign: { xs: "center", md: "left" },
          pb: 2,
        }}
      >
        TILE EXPERIENCE
      </Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          color: "#1A1A1A",
          textTransform: "uppercase",
          fontWeight: 400,
          fontFamily: "Cinzel",
          mt: -2,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        TWO DECADES OF
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          textDecoration: "underline",
          textTransform: "uppercase",
          color: "#1A1A1A",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign: { xs: "center", md: "left" },
          pb: 2,
        }}
      >
        PROFOUND EXPERTISE
      </Typography>
      <SliderTwo />
      <Button
        fullWidth
        variant="contained"
        endIcon={<ArrowIcon sx={{ color: "white" }} />}
        sx={{
          backgroundColor: "#1A1A1A",
          borderRadius: "0px",
          height: "65px",
          width: '100%',
          fontSize: "20px",
          mt: 5,
          fontFamily: "Libre Baskerville",
          "&:hover": {
            backgroundColor: "#FACE4E",
          },
        }}
      >
        Start Building
      </Button>
    </Grid>
    <Grid item xs={4}>
      <SliderThree />
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          color: "#1A1A1A",
          textTransform: "uppercase",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        YOU NAME IT
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          textDecoration: "underline",
          textTransform: "uppercase",
          color: "#1A1A1A",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign: { xs: "center", md: "left" },
          pb: 2,
        }}
      >
        WE CREATE IT
      </Typography>
    </Grid>
  </Grid>



{/* Mobile Version */}


  <Grid container spacing={3} justifyContent="center" alignContent={'center'} sx={{display:{xs:'block',md:'none'}}}>
    <Grid item xs={12}>
      <SliderOne />
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          color: "#1A1A1A",
          textTransform: "uppercase",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign:'center',
          mt:1,
        }}
      >
        THE ULTIMATE
      </Typography>
      <Typography
        
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          textDecoration: "underline",
          textTransform: "uppercase",
          color: "#1A1A1A",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign:'center',
          pb: 2,
        }}
      >
        TILE EXPERIENCE
      </Typography>
    </Grid>
    <Grid item xs={12}>
    <SliderTwo />
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          color: "#1A1A1A",
          textTransform: "uppercase",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign:'center',
          mt:1,
        }}
      >
        TWO DECADES OF
      </Typography>
      <Typography
        
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          textDecoration: "underline",
          textTransform: "uppercase",
          color: "#1A1A1A",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign:'center',
          pb: 2,
        }}
      >
        PROFOUND EXPERTISE
      </Typography>
     
      
    </Grid>
    <Grid item xs={12}>
      <SliderThree />
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          color: "#1A1A1A",
          textTransform: "uppercase",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign:'center',
          mt:1,
        }}
      >
        YOU NAME IT
      </Typography>
      <Typography
        
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          textDecoration: "underline",
          textTransform: "uppercase",
          color: "#1A1A1A",
          fontWeight: 400,
          fontFamily: "Cinzel",
          textAlign:'center',
          pb: 2,
        }}
      >
        WE CREATE IT
      </Typography>
      <Button
        fullWidth
        variant="contained"
        endIcon={<ArrowIcon sx={{ color: "white" }} />}
        sx={{
          backgroundColor: "#1A1A1A",
          borderRadius: "0px",
          height: "65px",
          width: '100%',
          fontSize: "20px",
          mt: 5,
          fontFamily: "Libre Baskerville",
          "&:hover": {
            backgroundColor: "#FACE4E",
          },
        }}
      >
        Start Building
      </Button>
    </Grid>
  </Grid>
</Box>

    </>
  );
};

export default Features;
