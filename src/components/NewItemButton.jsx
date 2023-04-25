import Swal from "sweetalert2"

const NewItemButton = ({listItems, setListItems}) => {
    const NewItemModal = async () => {
        const { value } = await Swal.fire({
            title: "New Item Information",
            html: `
                <input 
                    type="text"
                    id="name" 
                    name="name" 
                    placeholder="Name"
                    class="swal2-input"
                />
                <input 
                    type="number" 
                    id="quantity" 
                    name="quantity"
                    placeholder="Quantity"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="unit" 
                    name="unit"
                    placeholder="Unit"
                    class="swal2-input"
                />
            `,
            confirmButtonText: "Add item",
            showCancelButton: true,
            cancelButtonText: "Dismiss",
            focusConfirm: false,
            preConfirm: () => {
                const name = Swal.getPopup().querySelector("#name").value;
                const quantity = Swal.getPopup().querySelector("#quantity").value;
                const unit = Swal.getPopup().querySelector("#unit").value;
                if (!name || !quantity || !unit) {
                    Swal.showValidationMessage("Prease enter name");
                }
                return { name, quantity, unit };
            },
        })
        setListItems([
            ...listItems,
            {
                id: listItems.length+1,
                ...value,
                checked: false,
            }
        ])
    }

    return (
        <button
            type="button"
            onClick={NewItemModal}
            class="btn btn-outline-primary"
        >
            <i class="bi bi-plus-circle"></i>
        </button>
    )
}

export default NewItemButton