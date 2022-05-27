import CategoryItem from "./../category-item/category-item.component";
import "./directory.style.scss";

const Directory = (props) => {
  const { categories } = props.categories;
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem
          category={category}
          categories={categories}
          key={category.id}
        />
      ))}
    </div>
  );
};

export default Directory;
