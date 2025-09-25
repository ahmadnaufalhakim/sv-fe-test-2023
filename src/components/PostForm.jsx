import { useEffect, useState } from "react";

const PostForm = ({ initialData, onSubmit }) => {
	const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    status: "draft",
  })

  useEffect(() => {
    if (initialData) {
      setForm(initialData)
    }
  }, [initialData])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (status) => {
    onSubmit({ ...form, status })
  }

  return (
    <div className="space-y-4">
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title (min. 20 characters)"
        className="border p-2 w-full"
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Content (min. 200 characters)"
        rows="6"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category (min. 3 characters)"
        className="border p-2 w-full"
      />
      <div className="flex gap-2">
        <button
          onClick={() => handleSubmit("publish")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Publish
        </button>
        <button
          onClick={() => handleSubmit("draft")}
          className="bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Save as Draft
        </button>
      </div>
    </div>
  )
}

export default PostForm
