import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #16043B;
`;

export const Header = styled.View`
  width: 100%;
  height: ${initialWindowMetrics.insets.top + 40}px;

  padding-top: ${initialWindowMetrics.insets.top}px;
  padding-left: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${initialWindowMetrics.insets.top}px;
  left: 8px;
`;

export const BackButtonIcon = styled(MaterialIcons).attrs({
  name: 'chevron-left',
  size: 35,
  color: '#FFFFFF',
})`
  width: 35px;
  height: 35px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_500Medium';
  color: #FFFFFF;
`;
