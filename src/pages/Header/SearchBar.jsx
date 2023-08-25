import Search from "../../assets/images/search.png";

function Searchbar() {
  return (
    <div className="search-bar">
      <input type="text" />
      <img src={Search} alt="Search" className="icon" />
    </div>
  );
}

export default Searchbar;
