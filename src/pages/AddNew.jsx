import PostForm from "../components/PostForm";

import { createArticle } from "../api/article";

const AddNew = () => {
	const handleSubmit = async (post) => {
		try {
      await createArticle(post)
      alert(`Post "${post.title}" is successfully created`)
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
			<h1 className="text-2xl font-bold mb-4">Add New Post</h1>
			<PostForm onSubmit={handleSubmit} />
		</div>
	)
}

export default AddNew
