import { useEffect, useState } from "react";
const [token, setToken] = useState(null);
const [username, setUsername] =  useState("");
const [password, setPassword] = useState("");


async function App() {
  const login = async () => {
    const res = await fetch("http://10.48.41.126:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    })
  }
  const data = await res.json()
  if (data.access) {
    setToken(data.access);
    localStorage.setItem("token", data.access);

  } else {
    alert("login failed")
  }
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://10.48.41.126:3000/posts/")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
    <h2>Login</h2>

    <input
      placeholder="Username"
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      placeholder="Password"
      type="password"
      onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={login}>Login</button>
  </div>
)
}

export default App;