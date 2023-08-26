import Logo from "./Logo";
import Icon from "./Icon";
import Search from "../../assets/images/search.png";
import Account from "../../assets/images/account.png";
import Favorite from "../../assets/images/favorite.png";
import Cart from "../../assets/images/cart.png";
import Searchbar from "./SearchBar";
import Button from "../../components/Button";
import IconBadge from "./IconBadge";
import { useNavigate } from "react-router-dom";

function Header({ cart, cartClick }) {
  const navigate = useNavigate();

  return (
    <header>
      <Logo />
      <nav className="categories">
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
      </nav>
      <nav className="header-right">
        <Searchbar src={Search} alt="Search" />
        <Icon src={Account} alt="Profile" />
        <Icon src={Favorite} alt="Favorites" />
        <Icon src={Cart} alt="Cart" onClick={cartClick}>
          <IconBadge cart={cart} />
        </Icon>
      </nav>
    </header>
  );
}

export default Header;
