import { useEffect, useState } from "react";
import Login from "./components/Login";
import Feed from "./components/Feed";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("token");
    if (saved) setToken(saved);
  }, []);

  return (
    <div>
      {token ? <Feed token={token} /> : <Login setToken={setToken} />}
    </div>
  );
}

export default App;