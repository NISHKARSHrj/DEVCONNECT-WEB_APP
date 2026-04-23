import { useEffect, useState } from "react";
import { getPosts, createPost } from "../services/api";

function Feed({ token }) {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handlePost = async () => {
    await createPost(token, content);
    setContent("");
    loadPosts();
  };

  return (
    <div>
      <h2>Feed</h2>

      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write something..."
      />

      <button onClick={handlePost}>Post</button>

      {posts.map((p) => (
        <div key={p.id}>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;