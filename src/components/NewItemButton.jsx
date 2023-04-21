import Swal from "sweetalert2"


const NewItemButton = () => {
    const NewItemModal = () => {
        Swal.fire('Holi')
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