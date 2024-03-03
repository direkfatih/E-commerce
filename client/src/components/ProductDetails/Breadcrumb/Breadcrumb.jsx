import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Anasayfa</a>
          </li>
          <li>
            <a href="#">Ürün</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
