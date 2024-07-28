import React from 'react';

import {createBox, createText, useTheme} from '@shopify/restyle';
import {Theme} from '../theme';

const Box = createBox<Theme>();

function ThemedBox({children}: React.PropsWithChildren) {
  const theme = useTheme();
  const {mainBackground} = theme.colors;

  return (
    <Box flex={1} backgroundColor={mainBackground}>
      {children}
    </Box>
  );
}

export default ThemedBox;
