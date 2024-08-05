import React from 'react';
import { StyleSheet } from 'react-native';
import {createBox, createText, useTheme} from '@shopify/restyle';
import {Theme} from '../theme';

const Box = createBox<Theme>();

function ThemedBox({children, style = {}}: {children: React.ReactNode, style?: object}) {	
  const theme = useTheme();
  const { spacing} = theme;

  return (
    <Box style={{...boxStyles.container, ...style}}>
      {children}
    </Box>
  );
}

export default ThemedBox;


const boxStyles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
  },
});