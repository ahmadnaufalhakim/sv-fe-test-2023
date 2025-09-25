import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PostForm from "../components/PostForm";

import { fetchArticle, updateArticle } from "../api/article";

const EditPost = () => {
	const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [])

  const fetchPost = async () => {
    const res = await fetchArticle(id)
    setPost(res.post)
  }

  const handleSubmit = async (updatedPost) => {
    try {
      await updateArticle(id, updatedPost)
      alert(`Post "${updatedPost.title}" is successfully ${updatedPost.status}ed`)
      window.location.href = "/"
    } catch (err) {
      let errStr = "";
      for (const [key, value] of Object.entries(JSON.parse(err.message))) {
        errStr += `${key}: ${value}\n`
      }
      alert(errStr)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      {post && <PostForm initialData={post} onSubmit={handleSubmit} />}
    </div>
  )
}

export default EditPost
