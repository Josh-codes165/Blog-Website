import blogs from "../data/Blogs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Blogs() {
  const Navigate = useNavigate();
  return (
    <div>
      <button
        style={{
          marginLeft: "11%",
          padding: "3px 10px",
          marginTop: "10px",
          fontSize: "1.2rem",
          borderRadius: "5px",
          border: "1px solid var(--primary)",
        }}
        onClick={() => Navigate(-1)}
      >
        ←
      </button>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 className="blog">
          <span className="blogSpan">The Archive</span>
        </h2>
      </div>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-div">
            <div>
              <h3>{blog.title}</h3>
              {/* Added a short preview snippet */}
              <p style={{ color: "#666", marginBottom: "20px" }}>
                {blog.content.substring(0, 100)}...
              </p>
            </div>
            <Link to={`/blogs/${blog.id}`}>Read Full Article →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
