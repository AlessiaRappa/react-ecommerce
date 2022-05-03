import { useState } from "react";
import logo_ecommerce from "../logo_ecommerce.png";

export const Header = (props) => {
  const [search, setSearch] = useState("");

  const changing = (event) => {
    const value = event.target.value;
    setSearch(value);
    props.searching(value);
  };
  
  return (
    <header>
      <img className= "logo" src={logo_ecommerce} alt="React ecommerce" />
      <form>
        <input
          value={search}
          onChange={changing}
          type="text"
          placeholder="Search..."
        />
      </form>
    </header>
  );
};