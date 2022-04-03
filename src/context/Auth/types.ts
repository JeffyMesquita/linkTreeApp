export interface UserType {
  id: string;
  name: string;
  bio: string;
  nickname: string;
  avatar_url: string;
}

export interface AuthType {
  user: UserType;
}

export interface SignInPayloadType {
  nickname: string;
}

export interface AuthContextData {
  isAuthenticated: boolean;
  authenticateUser: AuthType;
  signIn: (payload: SignInPayloadType) => void;
  signOut: () => void;
}