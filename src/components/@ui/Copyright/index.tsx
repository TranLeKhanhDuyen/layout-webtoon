import React from 'react';
import { Box, Type } from 'theme/base';


const Copyright: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Box sx={{ textAlign: 'center', fontSize: '14px', color: '#c5c5c5' }}>
      <Type.CaptionBold>©{text}</Type.CaptionBold>
    </Box>
  );
};

export default Copyright;
 