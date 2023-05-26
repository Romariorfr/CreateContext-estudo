import React, { createContext, useContext, ReactNode } from "react";

// Definir o tipo dos dados de autenticação
interface AuthData {
  authenticated: boolean;
  user: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Criar um contexto de autenticação com o tipo correspondente
const AuthContext = createContext<AuthData | undefined>(undefined);

// Componente Provedor do contexto
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Dados a serem compartilhados
  const authData: AuthData = {
    authenticated: true,
    user: "John Doe",
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

// Componente Consumidor do contexto
const UserInfo: React.FC = () => {
  // Acessar o contexto usando o hook useContext
  const authData = useContext(AuthContext);

  return (
    <div>
      <h2>User Info</h2>
      {authData?.authenticated ? (
        <p>Welcome, {authData?.user}!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

// Componente principal
const App: React.FC = () => {
  return (
    <AuthProvider>
      <UserInfo />
    </AuthProvider>
  );
};

export default App;
