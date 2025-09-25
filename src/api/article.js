const BASE_URL = import.meta.VITA_API_BASE || "http://localhost:8080/api"

export const fetchArticles = async () => {
	const resp = await fetch(`${BASE_URL}/articles`)

  if (!resp.ok) {
    const respBody = await resp.json()
		throw new Error(respBody.error)
	}
  return resp.json()
}

export const fetchArticle = async (id) => {
  const resp = await fetch(`${BASE_URL}/article/${id}`)

  if (!resp.ok) {
    const respBody = await resp.json()
    throw new Error(respBody.error)
  }
  return resp.json()
}

export const createArticle = async (data) => {
  const resp = await fetch(`${BASE_URL}/article`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })

  if (!resp.ok) {
    const respBody = await resp.json()
    throw new Error(JSON.stringify(respBody.error))
  }
  return resp.json()
}

export const updateArticle = async (id, data) => {
  const resp = await fetch(`${BASE_URL}/article/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })

  if (!resp.ok) {
    const respBody = await resp.json()
		throw new Error(respBody.error)
  }
  return resp.json()
}

export const deleteArticle = async (id) => {
  const resp = await fetch(`${BASE_URL}/article/${id}`, {
    method: "DELETE"
  })

  if (!resp.ok) {
    const respBody = await resp.json()
		throw new Error(respBody.error)
  }
  return resp.json();
}
