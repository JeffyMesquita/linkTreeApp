export type AppRootParamList = {
  Home: undefined;
  NewLink: undefined;
  SignIn: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}