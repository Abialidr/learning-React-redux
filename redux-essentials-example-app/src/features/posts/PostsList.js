import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        VIew post
      </Link>
    </article>
  ))

  return (
    <>
      <section></section>
      <section className="posts-list">
        <h2>Posts</h2>
        {renderedPosts}
      </section>
    </>
  )
}
