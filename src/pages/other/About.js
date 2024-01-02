import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const images = [
  {
    src: "/assets/img/locations/bangalore.png",
    location: "Bangalore ",
    phone: "7904125027",
    email: "ranjith@webxinfinity.com",
    address: "Dks idt off dreteg emb ofe 31 3214 nnd bddjtjk",
    pincode: "560021",
  },
  {
    src: "/assets/img/features/image 32.png",
    location: "Mangalore ",
    phone: "7904125027",
    email: "Prajwal@webxinfinity.com",
    address: "Dks idt off dreteg emb ofe 31 3214 nnd bddjtjk",
    pincode: "560021",
  },
  {
    src: "/assets/img/features/image 32.png",
    location: "Bangalore ",
    phone: "7904125027",
    email: "ranjith@webxinfinity.com",
    address: "Dks idt off dreteg emb ofe 31 3214 nnd bddjtjk",
    pincode: "560021",
  },
  {
    src: "/assets/img/features/image 32.png",
    location: "Chennai",
    phone: "7904125027",
    email: "ranjith@webxinfinity.com",
    address: "Dks idt off dreteg emb ofe 31 3214 nnd bddjtjk",
    pincode: "560021",
  },
  {
    src: "/assets/img/features/image 32.png",
    location: "Bangalore",
    phone: "7904125027",
    email: "ranjith@webxinfinity.com",
    address: "Dks idt off dreteg emb ofe 31 3214 nnd bddjtjk",
    pincode: "560021",
  },
  {
    src: "/assets/img/features/image 32.png",
    location: "Mangalore",
    phone: "7904125027",
    email: "ranjith@webxinfinity.com",
    address: "Dks idt off dreteg emb ofe 31 3214 nnd bddjtjk",
    pincode: "560021",
  },
  {
    src: "/assets/img/features/image 32.png",
    location: "Bangalore",
    phone: "7904125027",
    email: "ranjith@webxinfinity.com",
    address: "Dks idt off dreteg emb ofe 31 3214 nnd bddjtjk",
    pincode: "560021",
  },
  {
    src: "/assets/img/features/image 32.png",
    location: "Chennai",
    phone: "7904125027",
    email: "ranjith@webxinfinity.com",
    address: "Dks idt off dreteg emb ofe 31 3214 nnd bddjtjk",
    pincode: "560021",
  },
];

const About = () => {
  let { pathname } = useLocation();

  // Function to chunk the array into smaller arrays
  const chunkArray = (array, chunkSize) => {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, chunkSize + index));
      index += chunkSize;
    }
    return chunkedArr;
  };

  // Chunking the images array into smaller arrays with 8 elements each
  const chunkedImages = chunkArray(images, 8);

  // Function to split the address into multiple lines based on word count
  const splitAddress = (address, wordsPerLine) => {
    const words = address.split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach((word) => {
      if ((currentLine + word).length > wordsPerLine) {
        lines.push(currentLine.trim());
        currentLine = "";
      }
      currentLine += `${word} `;
    });

    if (currentLine.trim() !== "") {
      lines.push(currentLine.trim());
    }

    return lines;
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        <Grid container sx={{ pl: 8, p: 15 }}>
          <Stack direction="row" spacing={40} >
            <Typography
              sx={{
               
                fontSize: "45px",
                lineHeight: "48px",
                fontWeight: 400,
                fontFamily: 'Cinzel',
              }}
            >
              Find us near you
            </Typography>
            <TextField
              size="small"
              placeholder="Search..."
              sx={{
                width: "50ch",
                pt: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#737373", // Change the border color when focused
                  },
                },
              }}
              InputProps={{
                style: { borderRadius: "50px", borderColor: "#737373" },
                endAdornment: <SearchIcon sx={{ color: "#737373" }} />,
              }}
            />
          </Stack>
        </Grid>

        {chunkedImages.map((chunk, index) => (
          <Grid
            key={index}
            sx={{ pl: 10, pr: 10, pb: 30, mt: 5 }}
            container
            rowSpacing={3}
          >
            {chunk.map((item, idx) => (
              <Fragment key={idx}>
                <Grid item xs={0.5}></Grid>
                <Grid item xs={4}>
                  <img src={item.src} width={320} height={210} alt="Location" />
                </Grid>
                <Grid item xs={3} sx={{ borderTop: "1px solid black" }}>
                  <Typography
                    sx={{
                      fontSize: "26px",
                      color: "#1A1A1A",
                      textTransform: "capitalize",
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                    }}
                  >
                    {item.location}
                  </Typography>
                </Grid>
                <Grid item xs={1} sx={{ borderTop: "1px solid black" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "40.54px",
                      width: "58px",
                      height: "41px",
                      fontFamily: "Montserrat",
                      color: "#1A1A1A",
                    }}
                  >
                    PHONE
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "40.54px",
                      color: "#1A1A1A",
                      width: "58px",
                      height: "41px",
                      fontFamily: "Montserrat",
                    }}
                  >
                    EMAIL
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "40.54px",
                      color: "#1A1A1A",
                      width: "58px",
                      fontFamily: "Montserrat",
                      height: "41px",
                    }}
                  >
                    ADDRESS
                  </Typography>
                </Grid>
                <Grid item xs={3} sx={{ borderTop: "1px solid black" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      color: "#1A1A1A",
                      lineHeight: "40.54px",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {item.phone}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      color: "#1A1A1A",
                      lineHeight: "40.54px",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {item.email}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      pt: 1.3,
                      color: "#1A1A1A",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {splitAddress(item.address, 25).map((line, lineIdx) => (
                      <Fragment key={lineIdx}>
                        {line}
                        <br />
                      </Fragment>
                    ))}
                    {item.pincode}
                  </Typography>
                </Grid>
                <Grid item xs={0.5}></Grid>
              </Fragment>
            ))}
          </Grid>
        ))}
      </LayoutOne>
    </Fragment>
  );
};

export default About;
