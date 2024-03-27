
const CategoryList = (props) => {
    const { catData } = props;
  
    return (
      <li>
        <button onClick={() => {
            console.log("🚀 ~ CategoryList ~ onClick:")
          }}>{catData}</button>
        
      </li>
    );
  };
  
  export default CategoryList;