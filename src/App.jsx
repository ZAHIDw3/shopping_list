import { useState } from "react"
import ClearListButton from "./components/ClearListButton";
import ListItem from "./components/ListItem";
import NewItemButton from "./components/NewItemButton";

function App() {
  const [listItems, setListItems] = useState([
    {
      id: "1",
      name: "Arroz",
      quantity: 1,
      unit: "kg",
      checked: false,
    },
    {
      id: "2",
      name: "Frijol",
      quantity: 1,
      unit: "kg",
      checked: false,
    },
    {
      id: "3",
      name: " Leche",
      quantity: 2,
      unit: "lts",
      checked: false,
    },
    {
      id: "4",
      name: " Papel higenico",
      quantity: 1,
      unit: "pz",
      checked: false,
    },
  ])

  const handleItemChecked = (e) => {
    const newList = listItems.map((item) => {
      if (e.target.name === item.id) {
        item.checked = !item.checked;
      }
      return item;
    })
    setListItems(newList);
  }

  return (
    <div className="container text-center mt-2">
      <div className="row">
        <div className="col text-start">
          <h1>Shopping List</h1>
        </div>
        <div className="col text-end mt-1">
          <ClearListButton setListItems={setListItems} />
          <NewItemButton listItems={listItems} setListItems={setListItems} />
        </div>
      </div>
      <hr />
      {
        listItems.length === 0 && (
          <div>
            <h3>Your list is empty</h3>
            Please add new item to start.
          </div>
        )
      }
      {
        listItems.map((item) => (
          <ListItem
            item={item}
            handleItemChecked={handleItemChecked}
            listItems={listItems}
            setListItems={setListItems}
          />
        ))
      }

      <hr />

      <div className="col text-end">
        <ClearListButton setListItems={setListItems} />
        <NewItemButton />
      </div>

    </div>
  )
}

export default App
