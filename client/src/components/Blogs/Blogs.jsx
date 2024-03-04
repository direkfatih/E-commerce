import BlogItem from "./BlogItem";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>Blog</h2>
          <p>Bahar Koleksiyonu Yeni Modern Tasarımlar</p>
        </div>
        <h1 className="yakinda">ÇOK YAKINDA!</h1>
        <ul className="blog-list">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
