import useCVStore from "../store/CVStore.js";

export default function WorkInfo() {
    
    const works = useCVStore(state => state.experience);
    return (
        <div className="work-info">
            <h2 className="section-title">WORK EXPERIENCE</h2>
            {works.map((work, idx) => (
                <div key={`work - ${idx}`} className="entry">
                    <div className="entry-header">
                        <h3 className="company">{work.company}</h3>
                        <span className="dates">{work.startDate} - {work.endDate}</span>
                    </div>
                    <p className="position">{work.position}</p>
                    <ul className="descriptions">
                        {work.descriptions.map((desc, descIdx) => (
                            <li key={`work-${idx}-${descIdx}`}>
                                {desc}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}