import { Grid, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import contentImg from "../../assets/img/About/Contentimage.png";


const Content = () => {
 

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          pt: 15,
          height: { xs: "fit-content", md: "fit-content" },
        }}
      >
        <Stack>
          <Grid
            container
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            display={"flex"}
            sx={{ flexDirection: { xs: "row", md: "row" } }}
          >
                <Grid item xs={1}></Grid>
            <Grid
              item
              xs={12}
              md={5}
              data-aos="fade-right"
              data-duration="5000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center"
            >
              <Stack
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "15px 0px 0px 15px",
                }}
              >
                <Paper sx={{ p: 2, boxShadow: "none" }}>
                  <Typography
                    sx={{
                      color: "#1A1A1A",
                      fontSize: { xs: "28px", md: "45px" },
                      fontFamily: "Libre Baskerville",
                      textTransform: "uppercase",
                      textAlign: { xs: "center", md: "left" },
                      pb: 2,
                    }}
                  >
                    Designed to be free
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A1A1A",
                      fontSize: { xs: "13px", md: "17px" },
                      lineHeight: "30px",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Experience unparalleled freedom with Trove. Our franchise
                    system revolutionizes business, prioritizing efficient
                    systems over micromanagement. Elevate your venture with
                    unmatched scalability and embrace a new era of
                    entrepreneurial excellence.
                  </Typography>
                </Paper>
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
                data-aos="fade-left"
              data-duration="5000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"          
            >
              <Box
                component={"img"}
                src={contentImg}
                alt=""
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default Content;
