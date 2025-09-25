import { useEffect, useState } from "react"
import { fetchArticles, deleteArticle, updateArticle } from "../api/article"
import PostTable from "../components/PostTable"

import { titleCase } from "../utils/string"

const AllPosts = () => {
	const [posts, setPosts] = useState([])
  const [tab, setTab] = useState("publish")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState(null)

  const load = async () => {
    setLoading(true)
    try {
      const articles = await fetchArticles()
      setPosts(articles.posts)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const handleTrash = async (id) => {
    if (tab === "trash") {
      const post = posts.find(p => p.id == id)
      setConfirmDelete(post)
    } else {
      try {
        await updateArticle(id, {
          "status": "trash"
        })
        setPosts(posts =>
          posts.map(p =>
            p.id === id ? {...p, status: "trash"} : p
          )
        )
      } catch (err) {
        alert(`Failed to trash: ${err.message}`)
      }
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id)
      alert(`Post "${confirmDelete.title}" is successfully deleted`)
      setPosts(posts =>
        posts.filter(p => p.id !== id)
      )
      setConfirmDelete(null)
    } catch (err) {
      alert(`Failed to delete: ${err.message}`)
    }
  }

  const filtered = posts.filter(p => p.status === tab)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md pointer-events-auto"
            role="dialog"
            aria-modal="true"
          >
            <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
            <p className="mb-6">
              The post{" "}
              <span className="font-semibold">{confirmDelete.title}</span> will be
              deleted forever! Are you sure you want to do this?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => handleDelete(confirmDelete.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Yes, delete
              </button>
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="flex space-x-4 mb-4">
          {["publish", "draft", "trash"].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1 border-b-2 transition-colors ${
                tab === t
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
            >
              {titleCase(t)}
            </button>
          ))}
        </div>
        <PostTable posts={filtered} onTrash={handleTrash} />
      </div>
    </>
  )
}

export default AllPosts
