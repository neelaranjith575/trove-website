import {
    Box,
    Divider,
    Grid,
    Stack,
    Typography,
    TextField,
} from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";

const Counter = () => {
    const [progress1, setProgress1] = React.useState(75);
    const [progress2, setProgress2] = React.useState(50);
    const [progress3, setProgress3] = React.useState(25);

    const getProgressStyles = (progress) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "Montserrat",
        color: '#1A1A1AE5',
        fontSize: '16px',
    });

    return (
        <>
            <Stack sx={{ pl: 8, p: 15 }}>
                <Stack sx={{ pb: 10 }}>
                    <Typography
                        sx={{
                            color: "#1A1A1A",
                            fontSize: { xs: "20px", md: "40px" },
                            fontFamily: "Cinzel",
                            textTransform: "uppercase",
                            textAlign: "center",
                            pb: 1,
                        }}
                    >
                        How to find the right business for you?
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "Montserrat",
                            color: "#1A2D4C",
                            textAlign:'center',
                            fontSize: { xs: "15px", md: "15px" },
                            lineHeight: "30px",
                        }}
                    >
                        Experience unparalleled freedom with Trove. Our franchise system revolutionizes business,<br></br>
                        prioritizing efficient systems over micromanagement.
                        Elevate your venture with unmatched scalability <br></br>and embrace a new era of entrepreneurial excellence.
                    </Typography>
                </Stack>
                <Stack
                    direction={"row"}
                    sx={{ display: "flex", justifyContent: "space-evenly" }}
                >
                    <Stack alignItems="center" sx={{ position: 'relative' }}>
                        <CircularProgress
                            variant="determinate"
                            value={progress1}
                            sx={{color:'#989898'}}
                            size={130}
                            thickness={2}
                        />
                        <Typography
                            variant="caption"
                            color="textSecondary"
                            sx={getProgressStyles(progress1)}
                        >
                            {progress1}%
                        </Typography>
                    </Stack>
                    <Stack alignItems="center" sx={{ position: 'relative' }}>
                        <CircularProgress
                            variant="determinate"
                            value={progress2}
                            sx={{color:'#989898'}}
                            size={130}
                            thickness={2}
                        />
                        <Typography
                            variant="caption"
                            color="textSecondary"
                            sx={getProgressStyles(progress2)}
                        >
                            {progress2}%
                        </Typography>
                    </Stack>
                    <Stack alignItems="center" sx={{ position: 'relative' }}>
                        <CircularProgress
                            variant="determinate"
                            value={progress3}
                            sx={{color:'#989898'}}
                            size={130}
                            thickness={2}
                           
                        />
                        <Typography
                            variant="caption"
                            color="#989898"
                            sx={getProgressStyles(progress3)}
                        >
                            {progress3}%
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default Counter;
