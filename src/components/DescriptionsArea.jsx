
export default function DescriptionsArea({descriptions, onChange, onAdd, onDelete}) {
    return (
        <div className="entry-field">
            <label htmlFor="descriptions">Descriptions</label>
            {descriptions.map((desc, idx) => (
                <div key={`description - ${idx}`} className="description-form">
                    <span className="separator"> . </span>
                    <textarea
                        value={desc}
                        onChange={(e) => onChange(e.target.value, idx)}
                        placeholder={`Description ${idx+1}`}
                        type="text"
                    />
                    <button type="button" onClick={() => onDelete(idx)}>x</button>
                </div>
            ))}
            <button type="button" onClick={onAdd}> Add Description </button>
        </div>
    )
}