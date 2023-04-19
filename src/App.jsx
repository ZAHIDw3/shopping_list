import { useState } from "react"

function App() {
  const [listItems, setListItems] = useState([
    {
      id: "",
      name: "",
      quantity: 0,
      unit: "",
      checked: false,
    },
    {
      id: "",
      name: "",
      quantity: 0,
      unit: "",
      checked: false,
    },
    {
      id: "",
      name: "",
      quantity: 0,
      unit: "",
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
    <div className="container text-center">
      <div className="row">
        <div className="col text-start">
          <h1>Shopping List</h1>
        </div>
        <div className="col text-end">
          <button type="button" class="btn btn-outline-primary">
            <i class="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col">
          <input onClick={(e) => handleItemChecked(e)} name={listItems[0].id} checked={listItems[0].checked} type="checkbox" />
        </div>
        <div className="col-2 text-start">
          {/*listItems.first && <del>1 kg</del>*/}
          {/*!listItems.first && "1 kg"*/}
          {listItems[0].checked ? <del>{`${listItems[0].quantity} ${listItems[0].unit}`}</del> : `${listItems[0].quantity} ${listItems[0].unit}`}
        </div>
        <div className="col-5 col-md-6 text-start" style={{ textDecoration: listItems[0].checked && "line-through" }}>{listItems[0].name}</div>
        <div className="col-4 col-md-3 btn-group btn-group-sm" role="group">
          <button type="button" class="btn btn-outline-primary">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button type="button" class="btn btn-outline-primary">
            <i class="bi bi-files"></i>
          </button>
          <button type="button" class="btn btn-outline-danger">
            <i class="bi bi-trash2-fill"></i>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input onClick={(e) => handleItemChecked(e)} name={listItems[0].id} checked={listItems[0].checked} type="checkbox" />
        </div>
        <div className="col-2 text-start">
          {/*listItems.first && <del>1 kg</del>*/}
          {/*!listItems.first && "1 kg"*/}
          {listItems[0].checked ? <del>{`${listItems[0].quantity} ${listItems[0].unit}`}</del> : `${listItems[0].quantity} ${listItems[0].unit}`}
        </div>
        <div className="col-5 col-md-6 text-start" style={{ textDecoration: listItems[0].checked && "line-through" }}>{listItems[0].name}</div>
        <div className="col-4 col-md-3 btn-group btn-group-sm" role="group">
          <button type="button" class="btn btn-outline-primary">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button type="button" class="btn btn-outline-primary">
            <i class="bi bi-files"></i>
          </button>
          <button type="button" class="btn btn-outline-danger">
            <i class="bi bi-trash2-fill"></i>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input onClick={(e) => handleItemChecked(e)} name={listItems[0].id} checked={listItems[0].checked} type="checkbox" />
        </div>
        <div className="col-2 text-start">
          {/*listItems.first && <del>1 kg</del>*/}
          {/*!listItems.first && "1 kg"*/}
          {listItems[0].checked ? <del>{`${listItems[0].quantity} ${listItems[0].unit}`}</del> : `${listItems[0].quantity} ${listItems[0].unit}`}
        </div>
        <div className="col-5 col-md-6 text-start" style={{ textDecoration: listItems[0].checked && "line-through" }}>{listItems[0].name}</div>
        <div className="col-4 col-md-3 btn-group btn-group-sm" role="group">
          <button type="button" class="btn btn-outline-primary">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button type="button" class="btn btn-outline-primary">
            <i class="bi bi-files"></i>
          </button>
          <button type="button" class="btn btn-outline-danger">
            <i class="bi bi-trash2-fill"></i>
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
