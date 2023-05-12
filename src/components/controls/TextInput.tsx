import React from 'react';
import styled from '@/styles/styled-components';
import BaseText from './Text';
import BaseTextInput, {MaskedInput} from './BaseTextInput';
import Sizes, {FontSize} from '@/styles/Sizes';
import {TextInputProps, TextStyle, ViewStyle} from 'react-native'
import {TextInputMaskProps} from 'react-native-masked-text';
import {isNil} from 'lodash';
import {Feather} from '@/components';

export interface InputProps {
  error?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  inputRef?: (ref: any) => void;
}

interface LRInputProps {
  renderLeft?: () => React.ReactNode,
  renderRight?: () => React.ReactNode
}

function isTextInputMaskProps(props: any): props is TextInputMaskProps {
  return !isNil(props.type) && !isNil(props.options);
}

const MyTextInput: React.FC<InputProps & TextInputProps & Omit<TextInputMaskProps, 'type'> & {type?: string} & LRInputProps> = ({
  error,
  style,
  textStyle,
  renderLeft,
  renderRight,
  inputRef,
  ...props
}) => {
  return (
  <Container style={style}>
    <Title><ErrorTitle>{error}</ErrorTitle></Title>
    <TextInputLRContainer>
      {renderLeft && renderLeft()}
      {isTextInputMaskProps(props) ? <MaskedInput {...props} style={[textStyle, {flex: 1}]} refInput={inputRef}/> : <BaseTextInput {...props} style={[textStyle, {flex: 1}]} ref={inputRef}/>}
      {renderRight && renderRight()}
    </TextInputLRContainer>
  </Container>
)};

export default MyTextInput;

export interface AreaInputProps extends InputProps {
  description?: string;
}

export const MyTextArea: React.FC<AreaInputProps & TextInputProps> = ({
  error,
  description,
  style,
  textStyle,
  ...props
}) => (
  <AreaContainer style={style}>
    <Header>
      <Title><ErrorTitle>{error}</ErrorTitle></Title>
      <Description>{description}</Description>
    </Header>
    <CustomTextArea {...props} multiline style={textStyle}/>
  </AreaContainer>
);

const BaseContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colorInputBorder};
  justify-content: center;
`;

const Container = styled(BaseContainer)`
  height: ${Sizes.heightInputContainer}px;
`;

const TextInputLRContainer = styled.View`
  flex-direction:row;
  flex: 1;
  align-items: flex-end;
`;

const AreaContainer = styled(BaseContainer)`
  height: ${Sizes.heightInputAreaContainer}px;
`;

const Title = styled(BaseText)`
  font-size: ${FontSize.inputTitle}px;
  font-weight: bold;
  color: ${(props) => props.theme.colorTextInputTitle};
`;

const ErrorTitle = styled.Text`
  color: red;
`;

const CustomTextArea = styled(BaseTextInput)`
  height: ${Sizes.heightInputArea}px;
`;

const Header = styled.View`
  flex-direction: row;e
  align-items: center;
  justify-content: space-between;
`;

const Description = styled(BaseText)`
  font-size: ${FontSize.inputTitle}px;
`;


export const TextInputDrawable: React.FC<{
  onPress: () => void,
  style?: ViewStyle,
  name: string,
  color?: string
}> = (props) => {
  return (
    <ButtonContainer style={props.style} onPress={props.onPress}>
      <Feather name={props.name} color={props.color ?? 'black'}/>
    </ButtonContainer>
  )
};

const ButtonContainer = styled.TouchableOpacity`
  width: ${Sizes.hScale(20)};
  height: ${Sizes.vScale(25)};
  align-items: center;
  justify-content: center;
`;
