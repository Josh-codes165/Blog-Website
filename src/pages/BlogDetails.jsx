import { useParams } from "react-router-dom";
import blogs from "../data/Blogs";
import { useNavigate } from "react-router-dom";
function BlogDetails() {
  const Navigate = useNavigate();

  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog)
    return (
      <h2 style={{ textAlign: "center", padding: "100px" }}>
        Article Not Found
      </h2>
    );
  return (
    <article className="blogDetails">
      <button
        style={{
          marginBottom: "10px",
          padding: "3px 10px",
          fontSize: "1.2rem",
          borderRadius: "5px",
          border: "1px solid var(--primary)",
        }}
        onClick={() => Navigate(-1)}
      >
        ←
      </button>
      <header>
        <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
          ARTICLE
        </span>
        <h2 className="blogTitle">{blog.title}</h2>
        <hr style={{ margin: "20px 0", opacity: "0.1" }} />
      </header>
      <div className="content">
        {blog.content.split("\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </article>
  );
}

export default BlogDetails;
