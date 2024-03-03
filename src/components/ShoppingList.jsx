import ListItem from "./ListItem";
import { useState } from "react";
import ValidationModal from "../UI/ValidationModal";

const ShoppingList = () => {
  const [itemInput, setItemInput] = useState("");
  const [listItem, setListItem] = useState([]);
  const [isShowError, setIsShowError] = useState(false);

  function handleChange({ target: { value } }) {
    setItemInput(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isFormValid = itemInput.trim() !== "";

    if (!isFormValid) {
      console.error("Lütfen bir alışveriş listesi maddesi girin");
      setIsShowError(true);
      return;
    }

    const newItem = {
      id: listItem.length + 1,
      title: itemInput,
    };

    setListItem((prevState) => [...prevState, newItem]);
    setItemInput("");
  }

  function handleDelete(id) {
    const list = listItem.filter((item) => item.id !== id);
    setListItem(list);
  }

  return (
    <div className="border-inherit">
      <h2 className="text-3xl mb-8">Shopping List App</h2>
      <form className="my-4" onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2 flex-start">
          Shopping Item
        </label>
        <div className="flex">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Add shopping item..."
            type="text"
            value={itemInput}
            onChange={handleChange}
          />
          <button type="submit" className="bg-green-500 text-white py-2 px-4 font-semibold rounded">
            Add
          </button>
        </div>
        <ValidationModal
          isShowError={isShowError}
          setIsShowError={setIsShowError}
          message="Lütfen bir alışveriş listesi maddesi girin"
        />
      </form>
      <ul>
        {listItem.map((item) => (
          <ListItem key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
