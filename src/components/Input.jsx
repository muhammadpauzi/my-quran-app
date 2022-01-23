export default function Input({ placeholder, nameAndID, type = "text", className = "", withLabel = true, labelText, onChange }) {
    return (
        <div className="mb-3">
            {withLabel &&
                <label htmlFor={nameAndID} className="font-bold text-gray-800 mb-2">{labelText}</label>
            }
            <input type={type} name={nameAndID} id={nameAndID} placeholder={placeholder} className={`p-3 rounded border-2 border-gray-200 focus:border-green-400 outline-none transition focus:shadow-sm ${className}`} onChange={(e) => onChange(e)} />
        </div>
    )
}