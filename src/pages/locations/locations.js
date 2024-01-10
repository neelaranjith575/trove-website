import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import {
  Divider,
  Grid,
  Stack,
  Typography,
  TextField,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const images = [
  {
    src: "/assets/img/locations/bangalore.png",
    location: "Bangaloreeeee ",
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
    location: "Chennaiiii",
    phone: "7904125027",
    email: "ranjith@webxinfinity.com",
    address: "Dks idt off dreteg emb ofe 31 3214 nnd bddjtjk",
    pincode: "560021",
  },
  {
    src: "/assets/img/features/image 32.png",
    location: "Chennaiisbdbsjdsii",
    phone: "7904125027",
    email: "ranjith@webxinfinity.com",
    address: "Dks idt off dreteg emb ofe 31 3214 nnd bddjtjk",
    pincode: "560021",
  },
];

const Location = () => {
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

  //function for padding of bigger screens
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Fragment>
      <SEO titleTemplate="Locations" description="Locations page of Trove" />
      <LayoutOne headerTop="visible">
        <Grid
          container
          spacing={2}
          sx={{
            pl: isDesktopOrLaptop ? 5 : 0,
            pr: isDesktopOrLaptop ? 2 : 0,
            pb: isDesktopOrLaptop ? 5 : 0,
            pt: isDesktopOrLaptop ? 10 : 0,
          }}
        >
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "34px", sm: "30px", md: "36px", lg: "45px" },
                lineHeight: "48px",
                fontWeight: 400,
                fontFamily: "Cinzel",
                textAlign: { xs: "center", md: "center", lg: "center" },
              }}
            >
              Find us near you
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={6}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Grid item xs={12} sm={12} md={8} lg={6}>
                <TextField
                  size="small"
                  placeholder="Search..."
                  sx={{
                    pl: isDesktopOrLaptop ? 0 : 2,
                    pr: isDesktopOrLaptop ? 0 : 2,
                    width: "100%",
                    fontFamily: "Montserrat",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#737373",
                      },
                    },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "50px",
                      borderColor: "#737373",
                      fontFamily: "Montserrat",
                    },
                    endAdornment: <SearchIcon sx={{ color: "#737373" }} />,
                  }}
                />
              </Grid>
            </Stack>
          </Grid>
        </Grid>
        {chunkedImages.map((chunk, index) => (
          <Grid
            key={index}
            container
            rowSpacing={3}
            sx={{
              pl: isMobile ? 0 : 10,
              pr: isMobile ? 0 : 10,
              pb: isMobile ? 0 : 20,
              mt: isMobile ? 0 : 5,
            }}
          >
            {chunk.map((item, idx) => (
              <Fragment key={idx}>
                {isMobile ? (
                  <MobileLayout item={item} />
                ) : (
                  <DesktopLayout item={item} />
                )}
              </Fragment>
            ))}
          </Grid>
        ))}
      </LayoutOne>
    </Fragment>
  );
};

//mobile responsive screen starts here//
const MobileLayout = ({ item }) => (
  <Fragment>
    <Grid item xs={12} sm={12} md={12}>
      <Divider sx={{ borderColor: "#000000", marginX: "20px", mt: 4 }} />
    </Grid>
    <Grid item xs={12} sm={12} md={12} sx={{ pl: 5 }}>
      <Typography
        variant="h6"
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
    <Grid container>
      <Grid item xs={4.5} sm={12} md={12} sx={{ pl: 5 }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "40.54px",
            color: "#1A1A1A",
            fontFamily: "Montserrat",
          }}
        >
          PHONE:
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "40.54px",
            color: "#1A1A1A",
            fontFamily: "Montserrat",
          }}
        >
          Email:
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "40.54px",
            color: "#1A1A1A",
            fontFamily: "Montserrat",
          }}
        >
          ADDRESS:
        </Typography>
      </Grid>

      <Grid item xs={6} sm={12} md={12}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "40.54px",
            color: "#1A1A1A",
            fontFamily: "Montserrat",
          }}
        >
          {item.phone}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "40.54px",
            color: "#1A1A1A",
            fontFamily: "Montserrat",
          }}
        >
          {item.email}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "40.54px",
            color: "#1A1A1A",
            fontFamily: "Montserrat",
          }}
        >
          {item.address}
        </Typography>
      </Grid>
    </Grid>

    <Grid item xs={12} sm={12} md={12} sx={{ textAlign: "center" }}>
      <img src={item.src} width={320} height={210} alt="Location" />
    </Grid>
  </Fragment>
);

//Desktop responsive screen starts from here //

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

const DesktopLayout = ({ item }) => (
  <Grid container rowSpacing={3}>
    <Grid item xs={0.5}></Grid>
    <Grid item xs={12} md={4} sx={{ pb: 5 }}>
      <img src={item.src} width={320} height={210} alt="Location" />
    </Grid>
    <Grid item xs={12} md={3} sx={{ borderTop: "1px solid black" }}>
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
    <Grid item xs={8} md={1} sx={{ borderTop: "1px solid black" }}>
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
    <Grid item xs={12} md={3} sx={{ borderTop: "1px solid black" }}>
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
    <Grid item md={0.5} xs={12}></Grid>
  </Grid>
);

export default Location;
