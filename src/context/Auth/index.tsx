import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { signUser } from '../../services/users';
import { AuthContextData, AuthType } from './types';

const AuthContext = createContext<AuthContextData | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticateUser, setAuthenticateUser] = useState<AuthType | null>(
    null
  );

  useEffect(() => {
    async function getLoggedUser() {
      const authenticated = await AsyncStorage.getItem('@linktree:is_authenticated'); 
      setIsAuthenticated(!!authenticated);
    }

    getLoggedUser();
  }, []);

  const { mutate: signIn } = useMutation(signUser, {
    onSuccess: async (user) => {
      setIsAuthenticated(true);
      setAuthenticateUser(user);

      await AsyncStorage.setItem(
        '@linktree:is_authenticated',
        JSON.stringify(true)
      );
      await AsyncStorage.setItem('@linktree:user', JSON.stringify(user));
    },
  });

  const signOut = async () => {
    await AsyncStorage.multiRemove(['@linktree:is_authenticated', '@linktree:user']);

    setIsAuthenticated(false);
    setAuthenticateUser(null);

  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticateUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext, AuthProvider };
