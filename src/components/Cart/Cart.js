import Modal from "../UI/Modal";

const Cart = (props) => {

    return (
        <Modal>
            <ul>
                <li>
                    items - price - totalPrice
                </li>
            </ul>
            <div>
                <button onClick={props.onClose}>Close</button>
            </div>
        </Modal>
    )
}

export default Cart