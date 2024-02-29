import CategoryItem from "./CategoryItem";
import "./Categories.css"

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Kategoriler</h2>
          <p>Bahar Koleksiyonu Yeni Modern Tasarımlar</p>
        </div>
        <ul className="category-list">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ul>
      </div>
    </section>
  );
};

export default Categories;
