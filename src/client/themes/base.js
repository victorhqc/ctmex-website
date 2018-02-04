import {
  SIZES,
  PADDING,
  MARGIN,
  FONT_SIZES,
  FONT_FAMILIES,
  COLORS,
  LINE_HEIGHT,
} from './constants';

const baseTheme = {
  fontFamily: FONT_FAMILIES.gotham,
  fontSize: FONT_SIZES.sm,
};

export const getColor = color => COLORS[color];
export const getSize = size => SIZES[size];
export const getFontSize = size => FONT_SIZES[size];
export const getFontFamily = fontFamily => FONT_FAMILIES[fontFamily];
export const getLineHeight = lineHeight => LINE_HEIGHT[lineHeight];
export const getMargin = margin => MARGIN[margin];
export const getPadding = padding => PADDING[padding];
export const getThemeColor = ({ theme }) => theme.color;
export const getThemeBackgroundColor = ({ theme }) => theme.backgroundColor;

export default baseTheme;
