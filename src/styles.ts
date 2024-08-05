import { PixelRatio } from 'react-native';

export const normalize = (size: number) => {
  return PixelRatio.getPixelSizeForLayoutSize(
    size / Math.max(2, PixelRatio.get())
  );
};

export const Metrics = {
  SMALLER_MARGIN: normalize(1),
  SMALL_MARGIN: normalize(5),
  BASE_MARGIN: normalize(10),
  MEDIUM_MARGIN: normalize(15),
  DOUBLE_MARGIN: normalize(20),
  BIG_MARGIN: normalize(30),
  BIGGER_MARGIN: normalize(40)
};

export const UIConstants = {
  SMALLER_RADIUS: normalize(2),
  SMALL_RADIUS: normalize(4),
  BASE_RADIUS: normalize(8),
  BIG_RADIUS: normalize(16),
  BIGGER_RADIUS: normalize(32)
};



const getFontSize = (size: number) => ({
  fontSize: normalize(size),
  lineHeight: normalize(size * 1.5)
});

export const FontWeights = {
  700: {
    fontWeight: '700',
    fontFamily: 'Roboto-Bold'
  },
  600: {
    fontWeight: '600',
    fontFamily: 'Roboto-Medium'
  },
  500: {
    fontWeight: '500',
    fontFamily: 'Roboto-Regular'
  },
  400: {
    fontWeight: '400',
    fontFamily: 'Roboto-Thin'
  }
};


export default {
  H1: {
    ...getFontSize(28),
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
  },
  H2: {
    ...getFontSize(18),
    textAlign: 'left',
    ...FontWeights[700],
  },
  H3: {
    ...getFontSize(16),
    textAlign: 'left',
    ...FontWeights[600],
  },
  H4: {
    ...getFontSize(14),
    textAlign: 'left',
    ...FontWeights[400],
  },
  H5: {
    ...getFontSize(12),
    textAlign: 'left',
    ...FontWeights[400],
  },
  H6: {
    ...getFontSize(12),
    textAlign: 'left',
    ...FontWeights[400],
  },
  P: {
    ...getFontSize(16),
    textAlign: 'left',
    ...FontWeights[400],
  },
  SPAN: {
    ...getFontSize(10),
    textAlign: 'left',
    ...FontWeights[400],
  }
};

