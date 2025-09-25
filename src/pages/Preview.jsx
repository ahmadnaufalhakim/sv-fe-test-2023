import { useEffect, useState } from "react";

import Pagination from "../components/Pagination";

import { fetchArticles } from "../api/article";

const Preview = () => {
	const [posts, setPosts] = useState([])
  const [total, setTotal] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
  const perPage = 10

  useEffect(() => {
    fetchPosts()
  }, [currentPage])

  const fetchPosts = async () => {
    const res = await fetchArticles(perPage, (currentPage - 1) * perPage)
    setPosts(res.posts.filter(p => p.status === "publish"))
    setTotal(res.total)
  }

  const totalPages = Math.ceil(total / perPage)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Preview</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-6 p-4 border rounded">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-500">Category: {post.category}</p>
          <p className="mt-2">{post.content}</p>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default Preview
