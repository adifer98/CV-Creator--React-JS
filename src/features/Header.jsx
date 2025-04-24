import "../styles/header.scss";
import LOGO_PNG from "../assets/images/logo.png";
import EDIT_PNG from "../assets/images/edit.png";
import DOWNLOAD_PNG from "../assets/images/download.png";
import useCVStore from "../store/CVStore.js";
import ModalForm from "./ModalForm.jsx";

export default function Header() {
    
    const openModal = useCVStore(state => state.openModal);
    const setOpenModal = useCVStore(state => state.setOpenModal);
    const setSave2Pdf = useCVStore(state => state.setSave2Pdf);
    
    
    return (
        <>
            {openModal && <ModalForm />}
            
            <div className="header">
                <div className="app-title">
                    <img src={LOGO_PNG} alt="app-logo"/>
                    <h1>Your CV Creator</h1>
                </div>
                <div className="app-navigation">
                    <button onClick={() => setOpenModal(true)}>
                        <img src={EDIT_PNG} alt="edit-image"/>
                        <span>Edit</span>
                    </button>
                    <button onClick={() => setSave2Pdf(true)}>
                        <img src={DOWNLOAD_PNG} alt="save-image"/>
                        <span>Save</span>
                    </button>
                </div>
            </div>
        </>
    )
}