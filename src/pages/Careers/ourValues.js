import PropTypes from "prop-types";
import { Typography, Box, Grid, Stack } from "@mui/material";
import contentImg from "../../assets/img/Careers/ourvalues.webp";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';




const OurValues = ({ spaceTopClass, spaceBottomClass }) => {


  const ourValues = [
    {
      "title": "Empowerment",
      "context": "Trust employees to make decisions, encourage leadership at all levels, and foster a culture of responsibility."
    },
    {
      "title": "Growth",
      "context": "Support continuous learning, drive both personal and professional development, and expand company impact and reach."
    },
    {
      "title": "Culture",
      "context": "Build a positive, inclusive environment, promote teamwork and mutual respect, and celebrate diversity and shared values."
    },
    {
      "title": "Innovation",
      "context": "Embrace new technologies and ideas, challenge conventional thinking, and focus on creative problem-solving."
    },
    {
      "title": "Customer Centricity",
      "context": "Understand and anticipate customer needs, deliver exceptional service and value, and build long-term relationships through trust."
    }
  ]


  return (

    <>
      <Stack className="" data-aos="fade-up" data-aos-duration="3000">
        <Box sx={{ p: { xs: 3, md: 10 } }}>
          <Typography
            sx={{
              color: "#1A1A1A",
              fontSize: { xs: "28px", md: "45px" },
              fontFamily: "Libre Baskerville",
              textTransform: "uppercase",
              textAlign: { xs: "center", md: "center" },
              pb: 2,
            }}
          >
            Our Vision
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#1A1A1A",
              fontSize: { xs: "13px", md: "17px" },
              lineHeight: "30px",
              textAlign: { xs: "center", md: "center" },
            }}
          >
            To empower a sustainable and interconnected world where each individual's potential is nurtured, innovation thrives and positive change ripples across generations.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            pt: 10,
            pb: 10,
            height: { xs: "fit-content", md: "fit-content" },
            backgroundColor: '#315bfd0d',
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
              spacing={5}
              p={2}
            >
              <Grid item xs={1}></Grid>
              <Grid
                item
                xs={12}
                md={5}
              >
                <Stack
                  sx={{

                    borderRadius: "15px 0px 0px 15px",
                  }}
                >

                  {ourValues.map((value, index) => (
                    <Accordion key={index} >
                      <AccordionSummary
                        sx={{ fontFamily: 'Montserrat', }}
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                      >
                        <Typography sx={{ fontFamily: 'Montserrat', }}>{value.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={{ fontFamily: 'Montserrat' }}>{value.context}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}

                </Stack>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}

              >
                <Box
                  component={"img"}
                  src={contentImg}
                  alt=""
                  sx={{ width: { xs: "100%", md: '90%' } }}
                />
              </Grid>
            </Grid>
          </Stack>

        </Box>
      </Stack>
    </>


  );
};

OurValues.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default OurValues;
