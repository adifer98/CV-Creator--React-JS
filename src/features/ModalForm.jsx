import "../styles/ModalForm.scss";
import useCVStore from "../store/CVStore.js";
import CVForm from "./CVForm.jsx";

export default function ModalForm() {
    
    const setOpenModal = useCVStore(state => state.setOpenModal);
    
    return (
        <>
            <div className="modal" onClick={() => setOpenModal(false)}></div>
            
            <div className="modal-layout">
                <CVForm />
            </div>
        </>
)
}