import './styles.css'

interface IForm{
    children:any;
    onSubmit: (event:React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({children,onSubmit}:IForm) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form;