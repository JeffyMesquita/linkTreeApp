import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  LinearGradient,
  Container,
  LogoutButton,
  LogoutButtonIcon,
  Avatar,
  Username,
  Bio,
  NewLinkButton,
  NewLinkButtonText,
  LinksContainer,
  Link,
  Title,
} from './styles';
import useAuth from '../../hooks/useAuth';
import { useLinks } from '../../services/links';
import { Linking } from 'react-native';

function Home() {
  const navigation = useNavigation();
  const { authenticateUser, signOut } = useAuth();

  const { data: links, refetch} = useLinks(authenticateUser?.user?.id, {
    enabled: !!authenticateUser?.user?.id
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if(refetch && authenticateUser?.user?.id) {
        refetch();
      }
    });

    return unsubscribe;
  },[authenticateUser?.user?.id, refetch]);

  return (
    <LinearGradient colors={['#16043B', '#120330', '#0F0327']}>
      <Container>
        <LogoutButton onPress={() => signOut()}>
          <LogoutButtonIcon />
        </LogoutButton>

        <Avatar source={{ uri: authenticateUser?.user?.avatar_url }} />
        <Username>{authenticateUser?.user?.name}</Username>
        <Bio>{authenticateUser?.user?.bio}</Bio>

        <NewLinkButton
          onPress={() => {
            navigation.navigate('NewLink');
          }}
        >
          <NewLinkButtonText>Novo Link</NewLinkButtonText>
        </NewLinkButton>

        <LinksContainer>
          {links?.map((link) => (
            <Link key={link.id} onPress={() => Linking.openURL(link.url)}>
              <Title>{link.name}</Title>
            </Link>
          ))}
        </LinksContainer>
      </Container>
    </LinearGradient>
  );
}

export default Home;
