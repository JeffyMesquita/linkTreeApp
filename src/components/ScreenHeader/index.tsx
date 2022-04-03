import React from 'react';
import { ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, BackButton, BackButtonIcon , Title } from './styles';

interface ScreenHeaderProps {
  title: string;
  style?: ViewStyle
}

function ScreenHeader({ title, style }: ScreenHeaderProps) {
 

  const navigation = useNavigation();

  return (
    <Container style={style}>
      <Header>
        <BackButton onPress={() => {
          navigation.goBack();
        }}>
          <BackButtonIcon />
        </BackButton>
        <Title>{title}</Title>
      </Header>
    </Container>
  );
}

export default ScreenHeader;
