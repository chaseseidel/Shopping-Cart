import Logo from "./Logo";
import Icon from "./Icon";
import Search from "../../assets/images/search.png";
import Account from "../../assets/images/account.png";
import Favorite from "../../assets/images/favorite.png";
import Cart from "../../assets/images/cart.png";
import Searchbar from "./SearchBar";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <Logo />
      <ul className="categories">
        <Button text="Men" style="category" onClick={() => navigate("/men")} />
        <Button
          text="Women"
          style="category"
          onClick={() => navigate("/women")}
        />
        <Button
          text="Jewelry"
          style="category"
          onClick={() => navigate("/jewelry")}
        />
        <Button
          text="Electronics"
          style="category"
          onClick={() => navigate("/electronics")}
        />
      </ul>
      <ul className="header-right">
        <Searchbar src={Search} alt="Search" />
        <Icon src={Account} alt="Profile" />
        <Icon src={Favorite} alt="Favorites" />
        <Icon src={Cart} alt="Cart" />
      </ul>
    </header>
  );
}

export default Header;
