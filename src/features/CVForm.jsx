import "../styles/CVForm.scss";
import Input from "../components/Input.jsx";
import useCVStore from "../store/CVStore.js";
import {useState} from "react";
import DescriptionsArea from "../components/DescriptionsArea.jsx";


const newEducation = {
    institution: "",
    startDate: "",
    endDate: "",
    fieldOfStudy: "",
    descriptions: []
}

const newWork = {
    institution: "",
    startDate: "",
    endDate: "",
    position: "",
    descriptions: []
}


export default function CVForm() {

    const [general, setGeneral] = useState(useCVStore(state => state.generalInfo));
    const [education, setEducation] = useState(useCVStore(state => state.education));
    const [work, setWork] = useState(useCVStore(state => state.experience));
    
    const setInfo = useCVStore(state => state.setInfo);
    const setOpenModal = useCVStore(state => state.setOpenModal);
    
    function setGeneralByName(name, value) {
        setGeneral(prev => ({ ...prev, [name]: value }));
    }

    function setEducationByName(index, name, value, descriptionIndex = 0) {
        setEducation(prev => {
            const newState = [...prev];
            if (name === "descriptions") {
                newState[index][name][descriptionIndex] = value;
            } else {
                newState[index][name] = value;
            }
            return newState;
        });
    }

    function setWorkByName(index, name, value, descriptionIndex = 0) {
        setWork(prev => {
            const newState = [...prev];
            if (name === "descriptions") {
                newState[index][name][descriptionIndex] = value;
            } else {
                newState[index][name] = value;
            }
            return newState;
        });
    }
    
    function addEducation() {
        setEducation(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            newState.push({...newEducation});
            return newState;
        })
    }
    
    function deleteEducation(idx) {
        setEducation(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            newState.splice(idx, 1);
            return newState;
        })
    }

    function addWork() {
        setWork(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            newState.push({...newWork});
            return newState;
        })
    }

    function deleteWork(idx) {
        setWork(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            newState.splice(idx, 1);
            return newState;
        })
    }

    function addDescription(setFunction, idx) {
        setFunction(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            newState[idx].descriptions.push("");
            return newState;
        });
    }
    
    function deleteDescription(setFunction, itemIdx, descriptionIdx) {
        setFunction(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            newState[itemIdx].descriptions.splice(descriptionIdx, 1);
            return newState;
        })
    }
    
    
    function submitForm(event) {
        event.preventDefault();
        setInfo({ generalInfo: general, education: education, experience: work });
        setOpenModal(false);
    }
    
    
    return (
        <form className="cv-form-container" onSubmit={submitForm}>

            <div className="form-header">
                <h2>CV Creator</h2>
                <div className="form-actions">
                    <button className="submit-button">
                        Submit
                    </button>
                    <button type="button"
                            className="exit-button"
                            onClick={() => setOpenModal(false)}
                    >
                        ✕
                    </button>
                </div>
            </div>


            <div className="sections">
                <section className="section">
                    <h3>General Information</h3>
                    <div className="item-entry">
                    <Input title="Full Name" value={general.fullName} type="text" placeholder="Full Name"
                               onChange={setGeneralByName.bind(this, "fullName")}/>
                        <Input title="Phone number" value={general.phone} type="text" placeholder="Phone number"
                               onChange={setGeneralByName.bind(this, "phone")}/>
                        <Input title="Email" value={general.email} type="text" placeholder="Email"
                               onChange={setGeneralByName.bind(this, "email")}/>
                        <Input title="City" value={general.city} type="text" placeholder="City"
                               onChange={setGeneralByName.bind(this, "city")}/>
                        <Input title="State" value={general.state} type="text" placeholder="State"
                               onChange={setGeneralByName.bind(this, "state")}/>
                    </div>

                </section>

                <section className="section">
                    <h3>Education</h3>
                    <div className="entries">
                        {education.map((edu, idx) => (
                            <div key={`education - ${idx}`} className="item-entry">
                                <button
                                    type="button"
                                    id="delete-entry-button"
                                    onClick={() => deleteEducation(idx)}
                                >
                                    Delete
                                </button>

                                <Input title="Institution" value={edu.institution} type="text" placeholder="Institution"
                                       onChange={setEducationByName.bind(this, idx, "institution")}/>
                                <Input title="Start Date" value={edu.startDate} type="text" placeholder="Start Date"
                                       onChange={setEducationByName.bind(this, idx, "startDate")}/>
                                <Input title="End Date" value={edu.endDate} type="text" placeholder="End Date"
                                       onChange={setEducationByName.bind(this, idx, "endDate")}/>
                                <Input title="Degree" value={edu.fieldOfStudy} type="text" placeholder="Degree"
                                       onChange={setEducationByName.bind(this, idx, "fieldOfStudy")}/>
                                <DescriptionsArea
                                    descriptions={edu.descriptions}
                                    onChange={setEducationByName.bind(this, idx, "descriptions")}
                                    onAdd={addDescription.bind(this, setEducation, idx)}
                                    onDelete={deleteDescription.bind(this, setEducation, idx)}
                                />

                            </div>
                        ))}
                    </div>
                    <button type="button" onClick={addEducation}> Add Another Education</button>
                </section>

                <section className="section">
                    <h3>Work Experience</h3>
                    <div className="entries">
                        {work.map((work, idx) => (
                            <div key={`experience - ${idx}`} className="item-entry">
                                <button
                                    type="button"
                                    id="delete-entry-button"
                                    onClick={() => deleteWork(idx)}
                                >
                                    Delete
                                </button>
                                <Input title="Company" value={work.company} type="text" placeholder="Company"
                                       onChange={setWorkByName.bind(this, idx, "company")}/>
                                <Input title="Start Date" value={work.startDate} type="text" placeholder="Start Date"
                                       onChange={setWorkByName.bind(this, idx, "startDate")}/>
                                <Input title="End Date" value={work.endDate} type="text" placeholder="End Date"
                                       onChange={setWorkByName.bind(this, idx, "endDate")}/>
                                <Input title="Job Title" value={work.position} type="text" placeholder="Job Title"
                                       onChange={setWorkByName.bind(this, idx, "position")}/>
                                <DescriptionsArea
                                    descriptions={work.descriptions}
                                    onChange={setWorkByName.bind(this, idx, "descriptions")}
                                    onAdd={addDescription.bind(this, setWork, idx)}
                                    onDelete={deleteDescription.bind(this, setWork, idx)}
                                />
                            </div>
                        ))}

                    </div>
                    <button type="button" onClick={addWork}>Add Another Work Experience</button>
                </section>
            </div>
        </form>
    )
}