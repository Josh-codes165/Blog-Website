import { useNavigate } from "react-router-dom";

function About() {

  const Navigate = useNavigate()
  return (
    <>
      <div className="blogDetails">
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
        <h3 className="blogTitle">About The Daily Pivot</h3>
        <p>
          Welcome to The Daily Pivot, a digital space dedicated to navigating
          the ever-changing landscape of modern living and meaningful work. In a
          world that moves faster than ever, "pivoting" isn't just a business
          term—it’s a way of life. This blog was founded on the idea that the
          best way to stay ahead is to keep learning, stay curious, and be
          willing to look at the world from a new perspective. Since our launch
          in 2024, we’ve grown from a small collection of notes into a
          destination for readers who want more than just headlines. We dive
          deep into the "why" behind the "what."
        </p>
        <h3 className="blogTitle">Our Mission</h3>
        <p>
          Our goal is simple: To empower our readers with the tools and insights
          needed to navigate change with confidence. Whether you are looking for
          a deep dive into a complex topic or a fresh take on a daily habit, The
          Daily Pivot is here to help you turn information into action. What
          You’ll Find Here The Big Picture: Long-form essays on the trends and
          ideas shaping our future. Actionable Blueprints: Practical guides
          designed to help you master new skills. The Mid-Week Pivot: Short,
          punchy thoughts on productivity, mindset, and creativity.
        </p>
      </div>
    </>
  );
}

export default About;
