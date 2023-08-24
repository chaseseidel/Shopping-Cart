import Logo from "../components/Logo";
import Icon from "../components/Icon";
import Search from "../assets/images/search.png";
import Account from "../assets/images/account.png";
import Favorite from "../assets/images/favorite.png";
import Cart from "../assets/images/cart.png";
import Searchbar from "../components/SearchBar";
import Button from "../components/Button";

function Header() {
  return (
    <header>
      <Logo />
      <ul className="categories">
        <Button text="Men" style="category" />
        <Button text="Women" style="category" />
        <Button text="Jewelry" style="category" />
        <Button text="Electronics" style="category" />
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
