import styled from 'styled-components/native';
import { LinearGradient as DefaultLinearGradient } from 'expo-linear-gradient';

export const LinearGradient = styled(DefaultLinearGradient)`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;

  align-items: center;
  justify-content: center;
`;

export const AppName = styled.Text`
  font-size: 36px;
  font-family: 'Nunito_600SemiBold';
  color: #00E7C0;
  margin-bottom: 64px;
  text-align: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#B2B2B2',
})`
  width: 100%;
  height: 48px;
  justify-content: center;
  background-color: #30097DCC;
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Roboto_400Regular';
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 0 16px;
`;

export const SigInButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #00C9A7;
  margin-top: 32px;
  
`;

export const SignInButtonText = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: 18px;
  color: #0E0326;
  text-align: center;
`;
