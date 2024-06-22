const CategoryList = (props) => {
  const { catData } = props;

  return (
    <li>
      <button
        className="category-btn"
        onClick={() => {
          console.log("🚀 ~ CategoryList ~ onClick:");
        }}
      >
        {catData.toUpperCase()}
      </button>
    </li>
  );
};

export default CategoryList;
