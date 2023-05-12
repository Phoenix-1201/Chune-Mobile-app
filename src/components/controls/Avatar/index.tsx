import React from 'react';
import {Image, ImageSourcePropType, StyleProp, TextStyle, ViewProps} from 'react-native';

export interface AvatarProps extends ViewProps {
  uri?: string;
  avatar?: string;
  userName?: string;
  fullName?: string;
  placeholder?: ImageSourcePropType;
  onPress?: () => void;
  activeOpacity: number;
  textStyle: StyleProp<TextStyle>;
  size?: number;
}

import Sizes from '@/styles/Sizes';
import {isNil} from 'lodash';
import {AbsFullView, NameAbbr, AvatarContainer} from './Components';

const Component: React.FC<AvatarProps> = ({
  uri,
  avatar,
  userName,
  fullName,
  placeholder,
  onPress,
  activeOpacity = 0.8,
  size = Sizes.avatarSmall,
  style,
  textStyle,
  ...props
}: AvatarProps) => {
  const [isLoading, setLoading] = React.useState(false);
  const [isFailed, setFailed] = React.useState(false);
  const isSucceed = !isLoading && !isFailed; // means no avatar uri provided or failed.

  const renderUserName = () => {
    const name = userName || fullName;

    if (placeholder || !name) {
      //placeholder has priority
      return null;
    }

    // Success and uri or avatar provided, do not display
    if (isSucceed && (uri || avatar)) {
      return null;
    }

    const text = (userName || fullName || '')
      .split(' ')
      .filter((piece) => piece.length > 0)
      .map((piece) => piece.substring(0, 1).toUpperCase())
      .join('');
    return (
      <AbsFullView>
        <NameAbbr style={textStyle}>{text}</NameAbbr>
      </AbsFullView>
    );
  };

  const renderPlaceholder = () => {
    if (!placeholder) {
      return null;
    }
    if (isSucceed && (uri || avatar)) {
      return null;
    }
    return <AbsFullView as={Image} resizeMode="cover" source={placeholder} />;
  };

  const renderImage = () => {
    const url = uri || avatar;
    if (!url) {
      return null;
    }
    return (
      <AbsFullView
        as={Image}
        style={{backgroundColor: 'transparent'}}
        source={{uri: url}}
        onLoadStart={() => {
          setLoading(true);
          setFailed(false);
        }}
        onLoadEnd={() => setLoading(false)}
        onError={() => setFailed(true)}
      />
    );
  };

  return (
    <AvatarContainer
      size={size}
      style={style}
      onPress={onPress}
      disabled={isNil(onPress)}
      activeOpacity={activeOpacity || 0.8}
      {...props}>
      {renderImage()}
      {renderUserName()}
      {renderPlaceholder()}
    </AvatarContainer>
  );
};

export default Component;
