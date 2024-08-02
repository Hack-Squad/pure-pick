import React from 'react';
import { Text } from 'react-native';
import {createBox, createText, useTheme} from '@shopify/restyle';
import {Theme} from '../theme';

const Box = createBox<Theme>();

function ThemedBox({children, style = {}}: {children: React.ReactNode, style?: object}) {	
  const theme = useTheme();
  const { spacing} = theme;

  return (
    <Box style={style}>
      {children}
    </Box>
  );
}

export default ThemedBox;
