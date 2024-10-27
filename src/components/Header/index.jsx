import { useEffect, useState } from "react";
import "./styles.css";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";

const Header = ({ showProducts, changeSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchInput, setSearchInput] = useState(false);
  useEffect(() => {
    if (inputValue === "") {
      showProducts(inputValue);
      changeSearch(inputValue);
    }
  }, [inputValue]);

  return (
    <header>
      <p>
        Burgers <span>Fatec</span>
      </p>

      <section className="section-search">
        <div
          className="div-busca"
          style={searchInput ? { display: "flex" } : { display: "none" }}
        >
          <input
            placeholder="Digitar Pesquisa"
            id="input-placeholder"
            onChange={(evt) => setInputValue(evt.target.value)}
          />
          <Button
            onClick={function () {
              showProducts(inputValue);
              changeSearch(inputValue);
            }}
          >
            Pesquisar
          </Button>
        </div>
        <FaSearch
          onClick={() => setSearchInput(!searchInput)}
          style={searchInput ? { color: "orangered" } : { color: "black" }}
        />
      </section>
    </header>
  );
};

export default Header;
