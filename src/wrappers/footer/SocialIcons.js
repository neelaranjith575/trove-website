import { Stack } from "@mui/material";
import { ReactComponent as FacebookIcon } from "./../../assets/icons/svg/fb.svg"
import { ReactComponent as InstagramIcon } from "./../../assets/icons/svg/instagram.svg";
import { ReactComponent as YouTubeIcon } from "./../../assets/icons/svg/youtube.svg";
import { ReactComponent as PinterestIcon } from "./../../assets/icons/svg/pinterest.svg";
import { ReactComponent as LinkedInIcon } from "./../../assets/icons/svg/linkedin.svg";

const SocialIcons = () => {
    return (
        <>
            <Stack spacing={3} direction={"row"}>
                <a href="https://www.instagram.com/trove.india/" target="_blank">
                    <InstagramIcon style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://www.pinterest.com" target="_blank">
                    <PinterestIcon style={{width: '30px', height: '30px' }} />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <FacebookIcon style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <LinkedInIcon style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://www.youtube.com" >
                    <YouTubeIcon style={{ width: '30px', height: '30px' }} />
                </a>
            </Stack>
        </>
    );
}

export default SocialIcons;
