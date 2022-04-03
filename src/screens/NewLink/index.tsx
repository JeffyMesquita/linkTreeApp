import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import { useCreateLink } from '../../services/links';

import {
  LinearGradient,
  Container,
  Input,
  NewLinkButton,
  NewLinkButtonText,
} from './styles';

import ScreenHeader from '../../components/ScreenHeader';

interface FormData {
  name: string;
  url: string;
}

function NewLink() {
  const { authenticateUser } = useAuth();
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const { mutate: createLink} = useCreateLink({
    onSuccess: () => {
      navigation.navigate("Home")
    },
  });

  return (
    <LinearGradient colors={['#16043B', '#120330', '#0F0327']}>
      <ScreenHeader title="Novo link" />

      <Container>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="Nome"
              keyboardAppearance="dark"
            />
          )}
        />

        <Controller
          name="url"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="URL"
              keyboardAppearance="dark"
              keyboardType="url"
              autoCapitalize="none"
              autoCorrect={false}
            />
          )}
        />

        <NewLinkButton onPress={handleSubmit((data: FormData) => createLink({ ...data, dogger: authenticateUser?.user?.id}))}>
          <NewLinkButtonText>Salvar</NewLinkButtonText>
        </NewLinkButton>
      </Container>
    </LinearGradient>
  );
}

export default NewLink;
