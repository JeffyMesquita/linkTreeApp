import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

import {
  LinearGradient,
  Container,
  Input,
  SigInButton,
  SignInButtonText,
  AppName,
} from './styles';

interface FormData {
  nickname: string;
}

function SignIn() {
  const { control, handleSubmit } = useForm();
  const { signIn } = useAuth();

  const onSubmit = async (data: FormData) => {
    await signIn(data);
  };

  return (
    <LinearGradient colors={['#16043B', '#120330', '#0F0327']}>
      <Container>
        <AppName>myLinkTree</AppName>

        <Controller
          name="nickname"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Usuário"
              keyboardAppearance="dark"
              value={value}
              onChangeText={onChange}
              autoCorrect={false}
              autoCapitalize="none"
            />
          )}
        />

        <SigInButton onPress={handleSubmit(onSubmit)}>
          <SignInButtonText>Entrar</SignInButtonText>
        </SigInButton>
      </Container>
    </LinearGradient>
  );
}

export default SignIn;
