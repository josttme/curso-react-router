import { Link, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import blogData from '../data/blogdata.js'
export default function Blog () {
  return (
    <>
      <h1>Blog</h1>
      <Outlet />
      <ul>
        {blogData.map(post => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
    </>
  )
}
function BlogLink ({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}

BlogLink.propTypes = {
  post: PropTypes.exact({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
}
