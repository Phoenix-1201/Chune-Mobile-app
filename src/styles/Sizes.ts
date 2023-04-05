import { moderateScale, scale, verticalScale } from 'react-native-size-matters/extend';
import { StyleSheet, Dimensions } from 'react-native';
import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { height: screenHeight } = Dimensions.get("window")

export const hScale = DeviceInfo.isTablet() ? moderateScale : moderateScale;
export const vScale = DeviceInfo.isTablet() ? verticalScale : verticalScale;

export const Spacing = {
  XS: moderateScale(5),
  SM: moderateScale(10),
  MD: moderateScale(15),
  LG: moderateScale(20),
  XL: moderateScale(30),
};

const fontScale = hScale;
export const FontSize = {
  _9: fontScale(9),
  _10: fontScale(10),
  _12: fontScale(12),
  _13: fontScale(13),
  _14: fontScale(14),
  _15: fontScale(15),
  _16: fontScale(16),
  _18: fontScale(18),
  _20: fontScale(20),
  _21: fontScale(21),
  _30: fontScale(30),
  _44: fontScale(44),

  inputTitle: fontScale(12),
};

const logoSize = 67;

const sizes = {
  iconButton: 24,
  iconButtonPadding: 5,
  heightSectionHeader: 30,
  listItemHeight: 70,
  hPadding: Spacing.MD,
  heightInputContainer: hScale(60),
  heightInput: hScale(30),
  heightInputAreaContainer: vScale(120),
  heightInputArea: vScale(120),
  avatarSmall: 40,
  divider: StyleSheet.hairlineWidth,
  heightButton: 50,
  heightSmallButton: 30,
  isiOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  avatar: 140, // The Avatar Size

  hScale,
  vScale,
  // Bottom sheet Adamari Header Loggo

  bottomSheet: {
    collapsedSnap: vScale(35),
    headerHeight: hScale(logoSize),
    redStickerVerticalMargin: hScale(15),
    loginSnap: vScale(240),
    mainMenuSnap: screenHeight * 0.9
  },

  defaultIconSize: hScale(20),
};

export default sizes;
