import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Stack } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';



const SocialIcons = () =>{
    return(
        <>
        <Stack spacing={2} direction={"row"} sx={{marginTop:1}}>
              <InstagramIcon />
              <PinterestIcon />
              <FacebookIcon />
              <LinkedInIcon />
              <YouTubeIcon />
              </Stack>
        </>
    )
}
export default SocialIcons;