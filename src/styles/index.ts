import {StyleSheet} from 'react-native';

export const center = `
    justify-content: center;
    align-items: center;
`;

export const absolute_full = `
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
`;

export const absolute_top = `
    position: absolute;
    left: 0px;
    top: 0px;
`;

export const background_image = `
    ${absolute_full}
    width: 100%;
    height: 100%;
`;

export const bg_transparent = `
    background-color: transparent;
`;

export const fn_border_horizontal = function (szBorder?: number, colorBorder?: string) {
  return `
        border-top-width: ${szBorder || StyleSheet.hairlineWidth}px;
        border-top-color: ${colorBorder || '#000'};
        border-bottom-width: ${szBorder || StyleSheet.hairlineWidth}px;
        border-bottom-color: ${colorBorder || '#000'};
    `;
};
