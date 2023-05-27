import { AuthProvider } from "./util/AuthContext";
import Header from "./component";

const App = () => {
  return (
    <AuthProvider>
      <Header />
    </AuthProvider>
  );
};

export default App;
