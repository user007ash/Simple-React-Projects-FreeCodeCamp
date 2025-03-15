// Shopping List

import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.itemName;
    const newItem = [...items, input.value];
    setItems(newItem);
    form.reset();
  };

  const removeItem = (itemVal) => {
    const newItem = items.filter((item) => item !== itemVal);
    setItems(newItem);
  };

  function Item({ item }) {
    return (
      <div className="flex justify-between px-8 min-w-full">
        <div>{item}</div>
        <button className="text-red-600" onClick={() => removeItem(item)}>
          X
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-emerald-200 text-4xl font-bold p-16 flex flex-col items-center ">
      <div className="border-4 border-emerald-950 p-8 flex flex-col items-center gap-8">
        <h1 className="text-emerald-900">Items to Buy</h1>
        <div className="flex  text-2xl ">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="itemName"
              placeholder="Add a new item"
              className="border-2 rounded-2xl rounded-r-none p-4"
              required
            />
            <button
              type="submit"
              className="border-none rounded-2xl rounded-l-none p-4 hover:bg-emerald-900 bg-emerald-700 text-white "
            >
              Add
            </button>
          </form>
        </div>
        {items.map((item, index) => (
          <Item item={item} key={index + item} />
        ))}
      </div>
    </div>
  );
}

export default App;
