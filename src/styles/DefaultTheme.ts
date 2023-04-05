export default interface DefaultTheme {
  font: string;

  // Default Text Color
  colorText: string;

  // Default Control Color (Icon Buttons)
  colorControl: string;

  // Font Weight for Nav Bar
  fontWeightNavBar: string;

  // Navigation Bar Text Color
  colorTextNavBar: string;

  // Navigation Bar Tint color
  colorNavBarTint: string;

  // Navigation Bar Background Color
  colorBgNavBar: string;

  // List View Section Header Color
  colorBgSectionHeader: string;

  // List View Section Header Text Color
  colorTextSectionHeader: string;

  // List Divider color
  colorListDivider: string;

  // Input Boxes Bottom Border Color
  colorInputBorder: string;

  // Text Input Title color
  colorTextInputTitle: string;

  // Background color for modal
  colorBgModal: string;

  // Loading HUD Indicator Configuration
  nameHudIndicator: 'ball' | 'bar' | 'pacman' | 'pulse' | 'wave' | 'material';
}
