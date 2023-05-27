import React, { createContext, ReactNode } from "react";

// Definir o tipo dos dados de autenticação
interface AuthData {
  authenticated: boolean;
  user: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Criar um contexto de autenticação com o tipo correspondente
export const AuthContext = createContext<AuthData | undefined>(undefined);

// Componente Provedor do contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Dados a serem compartilhados
  const authData: AuthData = {
    authenticated: true,
    user: "Romário Ferreira",
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
