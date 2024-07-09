import { Box, Stack, CircularProgress } from "@mui/material";
// import CircularProgress from "@mui/material/CircularProgress";

export const Loader = () => {
  return (

    <Stack sx={{
      color: 'grey.500', display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      // backgroundColor:'white',
    }} spacing={2} direction="row" >
      {/* <CircularProgress color="inherit" /> */}
      <CircularProgress color="inherit"  />
      
    </Stack>
  );
};

export default Loader;
