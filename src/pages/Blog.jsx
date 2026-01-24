import blogs from "../data/Blogs"
import { Link } from "react-router-dom"

// function Blogs() {
//     return (
//         <div>
//             <div className="blog-container">{blogs.map((blog) => (
//                     <div key={blog.id}  className="blog-div">
//                         <h3>{blog.title}</h3>
//                         <Link to={`/blogs/${blog.id}`}>Read More</Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Blogs

function Blogs() {
  return (
    <div>
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h2 className="blog"><span className="blogSpan">The Archive</span></h2>
      </div>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-div">
            <div>
              <h3>{blog.title}</h3>
              {/* Added a short preview snippet */}
              <p style={{color: '#666', marginBottom: '20px'}}>
                {blog.content.substring(0, 100)}...
              </p>
            </div>
            <Link to={`/blogs/${blog.id}`}>Read Full Article →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs