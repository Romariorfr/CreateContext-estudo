import { AuthContext } from "../util/AuthContext";
import { useContext } from "react";

const Header = () => {
  const authData = useContext(AuthContext);

  return (
    <div>
      <h2>Componente Header de uma aplicação</h2>
      {authData?.authenticated ? (
        <p>Welcome, {authData?.user}!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default Header;
