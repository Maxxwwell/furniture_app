/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export const COLORS = {
    //base colors
    primary: '#808958',
    secondary: '#eeeeee',

    //colors
    black: '#1E1F20',
    white: '#FFFFFF',
    lightGray: '#ABAFB8',
    lightGray2: '#EFEFF0',
    lightGray3: '#D4D5D6',
    gray: '#BEC1D2',
    blue: '#42B0FF',
    transparentLightGray: '#CCD4D5D6',
    transparentLightGray2: 'rgba(255,255,255, 0.7)',
};

export const SIZES = {
    //global sizes
    base: 0,
    font: 14,
    radius: 12,
    padding: 24,


    //font sizes
    largeTitle: 30,
    h1: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    //app dimensions
    width,
    height,
};

export const FONTS = {
    h1: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h4, lineHeight: 22 },

};

const appTheme = { COLORS, SIZES };

export default appTheme;
