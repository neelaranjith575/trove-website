import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  Box
} from "@mui/material";
import Image from "./../../assets/img/locations/2024.webp"


const locations = [
  {
    src: `${Image}`,
    location: "Indiranagar ",
    city: "Bengaluru, Karnataka",
    phone: "+91 8951892764, +91 8951892763",
    email: "sales.rkph@troveindia.com",
    address: "Near ‘Rameshwaram Cafe’, 4th Cross, 12th Main, HAL 2nd Stage, Indiranagar, Bengaluru,",
    pincode: "560038",
    link: "https://maps.app.goo.gl/vdDp9iGeVowJMLfW9",
  },
  {
    src: `${Image}`,
    location: "Adugodi",
    city: "Bengaluru, Karnataka",
    phone: "+91 6366547553, +91 9901397101",
    email: "sales.bgrd@troveindia.com",
    address: "Near ‘Bosch Ltd’, Bannerghatta Road, Lakkasandra, Adugodi, Bengaluru,",
    pincode: "560030",
    link: "https://maps.app.goo.gl/ZxEGdAPZop2GzEz56",
  },
  {
    src: `${Image}`,
    location: "Rajajinagar ",
    city: "Bengaluru, Karnataka",
    phone: "+91 9731316556, +91 9243498101",
    email: "sales.mstar@troveindia.com",
    address: "Below ‘IVF Access’, Dr. Rajkumar Road, Rajajinagar 2nd Block, Bengaluru,",
    pincode: "560010",
    link: "https://maps.app.goo.gl/7F8Gq9QxkNEziMRN7",
  },

  {
    src: `${Image}`,
    location: "Basavanagudi",
    city: "Bengaluru, Karnataka",
    phone: "08026620224, +91 6366547522",
    email: "sales.mgc@troveindia.com",
    address: "Near ‘Nettakallappa Circle’, K R Road, Basavanagudi, Bengaluru,",
    pincode: "560004",
    link: "https://maps.app.goo.gl/WRU6GKSfRGThBe2t8",
  },
  {
    src: `${Image}`,
    location: "JP Nagar",
    city: "Bengaluru, Karnataka",
    phone: "+91 9900584436, +91 9886354744",
    email: "sales.flo@troveindia.com",
    address: "Near ‘Zudio’, Vittal Plaza, 24th Main Road, JP Nagar 1st Phase, Bengaluru,",
    pincode: "560078",
    link: "",
  },
  {
    src: `${Image}`,
    location: "Ramamurthy Nagar",
    city: "Horamavu, Bengaluru, Karnataka",
    phone: "+91 9900022106, +91 6366975401 ",
    email: "sales.rmn@troveindia.com",
    address: "Kalkere Main Road, Ramamurthy Nagar Horamavu Post, Bengaluru,",
    pincode: "560043",
    link: "https://maps.app.goo.gl/AhzbgtBL1ScM9Yb96",
  },
  {
    src: `${Image}`,
    location: "Whitefield",
    city: "Thubarahalli, Bengaluru, Karnataka",
    phone: "+91 9900264657, +91 8951892761",
    email: "sales.east@troveindia.com",
    address: "Opp. ‘Govt. Digital Library’, Varthur Main Road, Thubarahalli, Whitefield, Bengaluru,",
    pincode: "577005",
    link: "https://maps.app.goo.gl/uB6kcSDqiTiqU8tM8",
  },
  {
    src: `${Image}`,
    location: "Mysore Road",
    city: "New Guddadahalli, Bengaluru, Karnataka",
    phone: "+91 6366547524, +91 9900022103",
    email: "sales.vhpy@troveindia.com",
    address: "Above ‘Stanley’s Sofas & More’, New Guddadahalli, Mysore Road, Bengaluru,",
    pincode: "560026",
    link: "https://maps.app.goo.gl/gujVhpZ6PHEdBoKc6",
  },

  {
    src: `${Image}`,
    location: "Shivamogga",
    city: " Gandhi Nagar, Shivamogga, Karnataka",
    phone: "+91 9900263095, +91 9035176006",
    email: "sales.bss@troveindia.com",
    address: "Next to ‘Kautilya Medical’, 100 ft. Road, Gandhi Nagar, Shivamogga,",
    pincode: "577201",
    link: "https://maps.app.goo.gl/LEcncupArvSVunQq7",
  },
  {
    src: `${Image}`,
    location: "Tumakuru",
    city: "S S Puram, Tumakuru, Karnataka",
    phone: "+91 8790000921, +91 8790000912",
    email: "sales.vvp@troveindia.com",
    address: "Near ‘Maruthi Vidya Kendra’, 16th Cross, S S Puram, Tumakuru,",
    pincode: "572102",
    link: "https://maps.app.goo.gl/Vyi2Qj53BUeauTze6",
  },

  {
    src: `${Image}`,
    location: "Jigani",
    city: "Anekal, Bengaluru, Karnataka",
    phone: "+91 8050670701, +91 9886156789",
    email: "sales.adi@troveindia.com",
    address: "Bannerghatta Main Road, Begihalli Village Jigani, Anekal Taluk, Bengaluru,",
    pincode: "560105",
    link: "https://maps.app.goo.gl/hRizJnyTTTKf7aio8",
  },
  {
    src: `${Image}`,
    location: "Davangere",
    city: "Lokikere Industrial Area, Davangere, Karnataka",
    phone: "+91 9663352359, +91 9632321666",
    email: "sales.sejal@troveindia.com",
    address: "Opp. ‘Somanath Weigh Bridge’, Lokikere Main Road, Davangere Industrial Area, Davangere,",
    pincode: "577005",
    link: "https://maps.app.goo.gl/gujVhpZ6PHEdBoKc6",
  },



];

const Location = () => {
  // Function to chunk the array into smaller arrays

  // const [searchTerm, setSearchTerm] = useState("");

  // Filter images based on search term
  // const filteredImages = locations.filter((image) =>
  //   image.location.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // console.log(filteredImages, "city")


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
  const chunkedImages = chunkArray(locations, 11);

  //function for padding of bigger screens
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Fragment>
      <SEO titleTemplate="LOCATIONS" description="Locations page of Trove" />
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

              sx={{
                fontSize: { xs: "30px", md: "35px" },
                lineHeight: "40px",
                fontWeight: 500,
                fontFamily: "Libre Baskerville",
                textTransform: 'uppercase',
                ml: { xs: 3, md: -4 },
                textAlign: { xs: "center", md: "center", lg: "center" },
              }}
            >
              Find us near you
            </Typography>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={5} lg={6}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Grid item xs={12} sm={12} md={8} lg={6}>
                 <TextField
                  size="small"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
          </Grid> */}
        </Grid>
        {chunkedImages.map((chunk, index) => (
          <Grid
            key={index}
            container
            rowSpacing={3}
            sx={{
              pl: isMobile ? 0 : 10,
              pr: isMobile ? 0 : 10,
              pb: isMobile ? 0 : 10,
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
            fontWeight: 600,
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
            fontWeight: 600,
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
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "40.54px",
            color: "#1A1A1A",
            fontFamily: "Montserrat",
          }}
        >
          ADDRESS:
        </Typography>
      </Grid>

      <Grid item xs={7} sm={12} md={12}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "40.54px",
            color: "#1A1A1A",
            fontFamily: "Montserrat",
            textDecoration: 'none'
          }}
        >
          {item.phone}
        </Typography>
        <a href={item?.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "40.54px",
              color: "#1A1A1A",
              fontFamily: "Montserrat",
              textDecoration: 'none'
            }}
          >
            {item.email}
          </Typography>
        </a>
        <a href={item?.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "40.54px",
              color: "#1A1A1A",
              fontFamily: "Montserrat",
              textDecoration: 'none'
            }}
          >
            {item.address}
          </Typography>
        </a>
      </Grid>
    </Grid>

    <Grid item xs={12} sm={12} md={12} sx={{ textAlign: "center" }}>
      <Box component={"img"} src={item.src} width={320} height={210} alt="Location" />
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
      <a href={item?.link} target="_blank" rel="noreferrer">
        <Box component={"img"} src={item.src} width={320} height={210} alt="Location" />
      </a>
    </Grid>
    <Grid item xs={12} md={3} sx={{ borderTop: "1px solid black" }}>
      <a href={item?.link} target="_blank" rel="noreferrer">
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
      </a>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "15px",
          ml: "1px",
          fontFamily: "Montserrat",
          color: "#1A1A1A",
        }}
      >
        {item.city}
      </Typography>
    </Grid>
    <Grid item xs={8} md={1} sx={{ borderTop: "1px solid black" }}>
      <Typography
        sx={{
          fontWeight: 600,
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
          fontWeight: 600,
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
          fontWeight: 600,
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
      <a href={`mailto:${item?.email}`} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>

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
      </a>
      <a href={item?.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "15px",
            pt: 1.3,
            color: "#1A1A1A",
            fontFamily: "Montserrat",
          }}
        >
          {splitAddress(item.address, 35).map((line, lineIdx) => (
            <Fragment key={lineIdx}>
              {line}
              <br />
            </Fragment>
          ))}
          {item.pincode}
        </Typography>
      </a>
    </Grid>
    {/* <Grid item md={0.5} xs={12}></Grid> */}
  </Grid>
);

export default Location;
