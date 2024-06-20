import React from 'react';
import IconLink from "./IconLink";
import { Box, Typography } from "@mui/material";

function PortfolioBlock(props) {
  const { image, live, source, title, smallText } = props;
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Box component={'img'} src={image} alt={'mockup'} />
      <Typography variant="h1" style={{ fontSize: '2rem' }}>{title}</Typography>
      <Typography variant="body2" color="textSecondary" style={{ fontSize: '1rem', marginTop: '1rem' }}>
        {smallText}
      </Typography>
      <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
           alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
        </Box>
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
