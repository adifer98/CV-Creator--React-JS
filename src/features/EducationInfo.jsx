import useCVStore from "../store/CVStore.js";

export default function EducationInfo() {
    
    const educations = useCVStore(state => state.education);
    
    return (
        <div className="education-info">
            <h2 className="section-title">EDUCATION</h2>
            {educations.map((education, idx) => (
                <div key={`education - ${idx}`} className="entry">
                    <div className="entry-header">
                        <h3 className="institution">{education.institution}</h3>
                        <span className="dates">{education.startDate} - {education.endDate}</span>
                    </div>
                    <p className="degree">{education.fieldOfStudy}</p>
                    <ul className="descriptions">
                        {education.descriptions.map((desc, descIdx) => (
                            <li key={`education-${idx}-${descIdx}`}>
                                {desc}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}