import styled from '@/styles/styled-components';

const StyledText = styled.Text`
    ${(props) => (props.theme.font ? `font-family: ${props.theme.font};` : '')}
    color: ${(props) => props.theme.colorText};
`;

/**
 * Define most commonly used components here.
 */

export default StyledText;

export const AvenirNextBold = styled.Text`
  font-family: AvenirNext-Bold;
`;

export const AvenirNextDemiBold = styled.Text`
  font-family: AvenirNext-Demibold;
`;

export const AvenirNextHeavy = styled.Text`
  font-family: AvenirNext-Heavy;
`;

export const AvenirNextMedium = styled.Text`
  font-family: AvenirNext-Medium;
`;

export const AvenirNextRegular = styled.Text`
  font-family: AvenirNext-Regular;
`;

export const AvenirNextUltraLight = styled.Text`
  font-family: AvenirNext-UltraLight;
`;
