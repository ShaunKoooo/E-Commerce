import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel/Carousel";
import Form from './Form/Form';
import Selector from './Selector/Selector';
import GridCard from "./GridCard/GridCard";

const Header = () => {
  return (
    <div>
      <GridCard />
      <Link to={"/"} >Logo</Link>
      <SearchBar />
      <Link to={"/post/1234"}>Post</Link>
      <Link to={"/about"} >About</Link>
      <Selector />
      <Carousel />
      <Form />
    </div>
  );
};

export default Header;