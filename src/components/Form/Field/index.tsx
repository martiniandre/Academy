import './styles.css'

interface IField{
    label:string;
    type:string;
    register?:any
    value:string
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Text = ({label,type,register,value,onChange}:IField) => {
    return(
    <label htmlFor={label}className="input-label">
        <input className="input-field"
        type={type}
        autoFocus
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        ref={register}
        placeholder=" "
        />
        <span className="input-span">{label}</span>
    </label>
    )
}

export const CheckBox = ({value,name,professor,horario}) => {
    return(
        <label className="input-checkbox" htmlFor={name}>
            
        </label>
    )
}
