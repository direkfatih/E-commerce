import "./BlogItem.css"

const BlogItem = () => {
  return (
    <li className="blog-item">
      <a href="#" className="blog-image">
        <img src="/img/blogs/blog1.jpg" alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>25 Ocak 2023 </span>-<span> 0 Comments</span>
        </div>
        <div className="blog-info-center">
          <a href="#">Modanın kalbi burada atıyor.</a>
        </div>
        <div className="blog-info-bottom">
          <a href="#">Devamını Oku</a>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
