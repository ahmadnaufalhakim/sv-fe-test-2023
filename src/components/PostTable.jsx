import { Link } from "react-router-dom"

const PostTable = ({ posts, onTrash }) => {
  return (
    <table className="min-w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-lext">Title</th>
          <th className="p-2 text-lext">Category</th>
          <th className="p-2 text-lext">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.length > 0 ? (
          posts.map(post => (
            <tr key={post.id} className="border-t">
              <td className="p-2">{post.title}</td>
              <td className="p-2">{post.category}</td>
              <td className="p-2 space-x-2">
                <Link to={`/edit/${post.id}`} className="text-blue-600 logo">✏️</Link>
                <Link onClick={() => onTrash(post.id)} className="text-red-600 logo">🗑️</Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="border p-2 text-center" colSpan={3}>
              No posts found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default PostTable