/**
 * Define theme for application.
 */
import Colors from './Colors';
import DefaultTheme from './DefaultTheme';

/**
 * Rule
 * fonts start with fonts
 * color starts with color
 * dimensions start with sz
 * starts with szText : Font Size
 * starts with colorText : TextColor
 * height, width suffix
 * starts with name : use some thing starts with name
 * starts with style : Style, rarely used.
 * @type {Object}
 */

const baseTheme: DefaultTheme = {
  // Default font
  font: 'AvenirNext-Regular',

  // Default Text Color
  colorText: Colors.black,

  // Default Control Color (Icon Buttons)
  colorControl: Colors.black,

  // Font Weight for Nav Bar
  fontWeightNavBar: 'bold',

  // Navigation Bar Text Color
  colorTextNavBar: Colors.black,

  // Navigation Bar Tint color
  colorNavBarTint: Colors.black,

  // Navigation Bar Background Color
  colorBgNavBar: Colors.navBarColor,

  // List View Section Header Color
  colorBgSectionHeader: Colors.bgSectionHeader,

  // List View Section Header Text Color
  colorTextSectionHeader: Colors.textSectionHeader,

  // List Divider color
  colorListDivider: Colors.listDivider,

  // Input Boxes Bottom Border Color
  colorInputBorder: Colors.inputBorder, // Input Color Border

  // Text Input Title color
  colorTextInputTitle: Colors.inputTitle,

  // Background color for modal
  colorBgModal: Colors.bgSemiWhite,

  // Loading HUD Indicator Configuration
  nameHudIndicator: 'material', // Check /src/components/controls/Indicator.js to check available indicators
};

export default {
  base: baseTheme,
};

// Other themes will be exported later.
