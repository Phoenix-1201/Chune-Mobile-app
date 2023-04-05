import * as styledComponents from 'styled-components/native';
import DefaultTheme from './DefaultTheme';

const {
  default: styled,
  css,
  ThemeProvider,
  useTheme,
} = (styledComponents as unknown) as styledComponents.ReactNativeThemedStyledComponentsModule<
  DefaultTheme
>;

export {css, ThemeProvider, useTheme};
export default styled;
