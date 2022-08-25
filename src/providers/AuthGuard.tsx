import { createContext, useContext, useState } from 'react';

export type AuthGuardContext = {
  accessToken: string | null;
  signIn: (accessToken: string) => void;
  signOut: () => void;
};

const AuthGuardContext = createContext<AuthGuardContext>(
  {} as AuthGuardContext,
);

export const useAuthGuardContext = (): AuthGuardContext =>
  useContext<AuthGuardContext>(AuthGuardContext);

type Props = {
  children: React.ReactNode;
};

export const AuthGuard: React.FC<Props> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const signIn = (accessToken: string) => {
    setAccessToken(accessToken);
  };

  const signOut = () => {
    setAccessToken(null);
  };

  return (
    <AuthGuardContext.Provider value={{ accessToken, signIn, signOut }}>
      {children}
    </AuthGuardContext.Provider>
  );
};
