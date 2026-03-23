import react from "react"

const RadioButton = ({label, ...props}) => {
    return (
        <label style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
            <input
                type="radio"
                {...props}
            />
            {label}
        </label>
    )
}

export default RadioButton;
