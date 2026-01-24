import { useParams } from "react-router-dom";
import blogs from "../data/Blogs";

// function BlogDetails() {
//   const { id } = useParams();
//   const blog = blogs.find((b) => b.id === id);

//   if (!blog) {
//     return <h2>Blog Not Found</h2>;
//   }
//   return (
//     <div className="blogDetails">
//       <h2 className="blogTitle">{blog.title}</h2>
//       <p>{blog.content}</p>
//     </div>
//   );
// }

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2 style={{textAlign: 'center', padding: '100px'}}>Article Not Found</h2>;

  return (
    <article className="blogDetails">
      <header>
         <span style={{color: 'var(--primary)', fontWeight: 'bold'}}>ARTICLE</span>
         <h2 className="blogTitle">{blog.title}</h2>
         <hr style={{margin: '20px 0', opacity: '0.1'}} />
      </header>
      <div className="content">
        {/* This splits your text into paragraphs if you use \n in your data */}
        {blog.content.split('\n').map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </article>
  );
}

export default BlogDetails;
