import { useNavigate, useParams } from 'react-router-dom'
import blogData from '../data/blogdata'

export default function BlogPost () {
  const navigate = useNavigate()
  const { slug } = useParams()
  const { title, content, author, date } = blogData.find(blog => blog.slug === slug)

  const returnToBlog = () => {
    navigate('/blog')
  }

  return (
    <>
      <h2>{title}</h2>
      <button onClick={returnToBlog} className='btn btn-primary' style={{ marginTop: '20px' }}>Volver</button>
      <p>{content}</p>
      <p>By {author}</p>
      <p>{date}</p>
    </>
  )
}
