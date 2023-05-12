import styled from '@/styles/styled-components';
import {TextInputMask} from 'react-native-masked-text';
import Sizes, {FontSize} from '@/styles/Sizes';

const StyledInput = styled.TextInput`
    ${(props) => (props.theme.font ? `font-family: ${props.theme.font};` : '')}
    color: ${(props) => props.theme.colorText};
    height: ${Sizes.heightInput}px;
    font-size: ${FontSize._14}px;
    padding-vertical:0px;
`;

export const MaskedInput = styled(TextInputMask)`
    ${(props) => (props.theme.font ? `font-family: ${props.theme.font};` : '')}
    color: ${(props) => props.theme.colorText};
    height: ${Sizes.heightInput}px;
    font-size: ${FontSize._14}px;
    padding-vertical:0px;
`;

export default StyledInput;
