import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Button from "./Button";

function ApiData() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);
        setFiltered(res.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredPosts);
    setPage(1); // reset to page 1 on new search
  }, [search, posts]);

  const paginatedPosts = filtered.slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Fetched API Posts</h2>

      <input
        type="text"
        placeholder="Search posts by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
      />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Error loading data 😬</p>}

      {!loading && !error && (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            {paginatedPosts.map(post => (
              <Card key={post.id} title={post.title}>
                <p>{post.body}</p>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <Button onClick={() => setPage(p => Math.max(1, p - 1))} variant="secondary">Previous</Button>
            <span className="self-center text-sm dark:text-white">Page {page}</span>
            <Button
              onClick={() => {
                const maxPage = Math.ceil(filtered.length / postsPerPage);
                setPage(p => Math.min(maxPage, p + 1));
              }}
              variant="secondary"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default ApiData;
