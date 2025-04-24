import useCVStore from "../store/CVStore.js";

export default function GeneralInfo() {
    
    const generalInfo = useCVStore(state => state.generalInfo)
    
    return (
        <div className="general-info">
            <h1 className="full-name">{generalInfo.fullName}</h1>
            <div className="contact-row">
                <span>{generalInfo.email}</span>
                <span className="separator">•</span>
                <span>{generalInfo.phone}</span>
                <span className="separator">•</span>
                <span> {generalInfo.city}, {generalInfo.state} </span>
            </div>
            <div className="divider"></div>
        </div>
    )
}