import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./util/AuthContext";

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
