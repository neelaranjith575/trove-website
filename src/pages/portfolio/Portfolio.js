import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function StandardImageList() {
  return (
    <>
    <Box sx={{display:{xs:'none', md:'block',},pt:10, pb:5,height:'fit-content'}}>
    <Stack sx={{pl:10,pr:10}}>
      <Typography
        sx={{
          fontSize: { xs: '30px', md: '50px' },
          textAlign: 'center',
          mb: 5,
          mt: 5,
          fontWeight: 500,
          textTransform: 'uppercase',
          fontFamily: 'Libre Baskerville',
        }}
      >
        GOT JUST ABOUT EVERYTHING YOU NEED!
      </Typography>
      <ImageList cols={6}>
        {itemData.map((item) => (
          <a key={item.img} href={item.href} target="_blank" rel="noopener noreferrer">
            {/* Wrap the ImageListItem with a tag */}
            <ImageListItem sx={{ m: 0.5,transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(0.95)',
                  }, }}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  justifyContent: 'flex-end',
                  background: 'rgba(0, 0, 0, 0.7)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  '&:hover': {
                    opacity: 1,
                    '& img': {
                      transform: 'scale(1.2)',
                    },
                  },
                }}
              >
                <Typography
                  color="white"
                  sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '13px',
                    textTransform: 'capitalize',
                    fontWeight: '500',
                    p: 2,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </ImageListItem>
          </a>
        ))}
      </ImageList>
    </Stack>
    </Box>
    <Box sx={{display:{xs:'block', md:'none'}}}>
    <Stack sx={{ p: 3 }}>
      <Typography
        sx={{
          fontSize: { xs: '30px', md: '50px' },
          textAlign: 'center',
          mb: 5,
          mt: {xs:2,md:5},
          fontWeight: 500,
          textTransform: 'uppercase',
          fontFamily: 'Libre Baskerville',
        }}
      >
        GOT JUST ABOUT EVERYTHING YOU NEED!
      </Typography>
      <ImageList cols={2}>
        {itemData.map((item) => (
          <a key={item.img} href={item.href} target='_blank' rel="noopener noreferrer">
            {/* Wrap the ImageListItem with a tag */}
            <ImageListItem sx={{ m: 1 }}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  transition: 'transform 0.3s',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  justifyContent: 'flex-end',
                  background: 'rgba(0, 0, 0, 0.7)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  '&:hover': {
                    opacity: 1,
                    '& img': {
                      transform: 'scale(1.2)',
                    },
                  },
                }}
              >
                <Typography
                  color="white"
                  sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '13px',
                    textTransform: 'capitalize',
                    fontWeight: '500',
                    p: 2,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </ImageListItem>
          </a>
        ))}
      </ImageList>
    </Stack>
    </Box>


</>
  );
}

const itemData = [
  {
    img: '/assets/img/image-slider/image1.webp',
    title: 'FACADE',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image2.webp',
    title: 'STAIRCASE WALL',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image3.webp',
    title: 'GARDEN PATH',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image4.webp',
    title: 'LIVING ROOM',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image5.webp',
    title: 'SHOWER AREA',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image6.webp',
    title: 'SWIMMING POOL',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image7.webp',
    title: 'DINING AREA',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image8.webp',
    title: 'KITCHEN',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image9.webp',
    title: 'HEADBOARDS',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image10.webp',
    title: 'VANITY WALL',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image11.webp',
    title: 'PARKING AREA',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image12.webp',
    title: 'BALCONY',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image13.webp',
    title: 'TABLE TOP',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image14.webp',
    title: 'CEILING MURAL',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image15.webp',
    title: 'WALL FRAMES',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image16.webp',
    title: '3D TILES',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image17.webp',
    title: 'JAALI TILES',
    href: '#',
  },
  {
    img: '/assets/img/image-slider/image18.webp',
    title: 'STAIRCASE DECORATOR',
    href: '#',
  },
];