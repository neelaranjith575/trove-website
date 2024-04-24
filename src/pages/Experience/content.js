import { Grid, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import contentimg from "../../assets/img/About/Contentimage.png";
import { useEffect, useState } from "react";

const Content = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 1000); // 1000 milliseconds (1 second) delay before the animation starts

    return () => clearTimeout(animationTimeout); // Clear the timeout on component unmount
  }, []);

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
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                transform: animate
                  ? "translateX(0)"
                  : "translateX(-100%)", // Initial position off-screen
                transition: "transform 1s ease-in-out",
              }}
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
                      color: "#1A2D4C",
                      fontSize: { xs: "13px", md: "15px" },
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
              sx={{
                transform: animate
                  ? "translateX(0)"
                  : "translateX(100%)", // Initial position off-screen
                transition: "transform 1s ease-in-out",
              }}
            >
              <Box
                component={"img"}
                src={contentimg}
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
