export default function Input({title, value, type, placeholder, onChange}) {
    return (
        <div className="entry-field">
            <label htmlFor={title}>{title}</label>
            <input 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                placeholder={placeholder} 
                type={type}
            />
        </div>
    )
}