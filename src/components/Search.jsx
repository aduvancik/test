import { useEffect, useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ProductsContext } from '../Context/ProductContext';

export default function Search() {
  const { setSearchTerm, setMaxPrice, setMinPrice, setSortBy } = useContext(ProductsContext);
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const categoryArr = ["не сортувати", "дешевші", "дорожчі"];

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (event) => {
    if (!event.target.closest('.dropdown')) {
      setShowDropDown(false);
    }
  };

  const showMenu = () => {
    setShowDropDown(!showDropDown);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === categoryArr[1]) {
      setSortBy("cheap");
    } else if (category === categoryArr[2]) {
      setSortBy("dear");
    } else {
      setSelectedCategory("");
    }
    setShowDropDown(false);
  }

  const submit = (e) => {
    e.preventDefault();
    setSearchTerm(title);
    const targetElement = document.getElementById("productsList");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="pt-12">
      <form autoComplete="on" className="flex flex-col gap-7">
        <div>
          <div className="flex gap-5 p-2 md:p-5">
            <input
              type="text"
              placeholder="Що шукаєте?"
              onChange={(e) => setTitle(e.target.value)}
              className="input border p-2 rounded-lg flex-grow"
            />
            <button type="submit" onClick={(e) => submit(e)} className="flex button items-center gap-1 p-2.5 text-white rounded-lg">
              <span>Пошук</span>
              <AiOutlineSearch />
            </button>
          </div>
          <div className="flex gap-5 p-2 md:p-5 items-center flex-wrap sm:flex-nowrap max-h-20">
            <div className="flex gap-5 items-center">
              <p className="text-xl">ціна: </p>
              <input className="input border p-2 rounded-lg w-1/4" type="number" placeholder="від:" onChange={(e) => setMinPrice(e.target.value)} />
              <input className="input border p-2 rounded-lg w-1/4" type="number" placeholder="до:" onChange={(e) => setMaxPrice(e.target.value)} />
            </div>
            <div className="relative">
              <button type='button' className="dropdown p-2 button rounded-lg" onClick={showMenu}>
                {selectedCategory ? selectedCategory : "показувати спочатку"}
              </button>
              <div className={`absolute mt-2 ml-[-5px] flex flex-col gap-[2px] p-[2px] rounded-lg shadow-lg ${!showDropDown ? "hidden" : ""}`}>
                {categoryArr.map((category) => (
                  <li key={category} className="list-none p-2 button text-nowrap cursor-pointer hover:bg-gray-100" onClick={() => handleCategorySelect(category)}>
                    {category}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
