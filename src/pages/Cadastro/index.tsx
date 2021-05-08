import { FormEvent, useState } from 'react';
import './styles.css'
import { useHistory } from 'react-router-dom'

import Form from '../../components/Form';
import { Text } from '../../components/Form/Field';

import { IUser } from '../../types/user';
import { useMutation } from '@apollo/client';
import { Register } from '../../services/user';

const Cadastro = () => {
    const history = useHistory();

    const [user,setUser] = useState<IUser>({
        username:"",
        email:"",
        telefone:"",
        password:"",
        endereco:"",
        numero:""
    })
    const [errors,setErrors] = useState<string | null>(null)
    const [ userData ] =  useMutation<IUser>(Register,{
        onError:({message}) => setErrors(message)
    })
    const OnSubmit = (e: FormEvent) => {
        e.preventDefault()
        userData({
                variables:{
                   data: user,
                }, 
            })
        alert("Cadastro realizado!!")
        history.replace('/login')
    };
    function updateState(e:React.ChangeEvent<HTMLInputElement>){
        const { name, value } = e.target
       setUser({...user, [name]: value})
    }
    return(
            <div className="form-container">
                <Form onSubmit={OnSubmit}>
                    <h2>Cadastrar</h2>
                    {errors && <p>{errors}</p>}
                        <Text label="username" type="text" value={user.username} onChange={updateState}/>
                       
                    <div className="contato">
                        <Text label="email" type="text" value={user.email} onChange={updateState} />

                        <Text label="telefone" type="text" value={user.telefone} onChange={updateState}/>

                    </div>
                    <Text label="password" type="password" value={user.password} onChange={updateState}/>

                    <div className="endereco">
                    <Text label="endereco" type="text" value={user.endereco} onChange={updateState}/>

                    <Text label="numero"  type="number" value={user.numero} onChange={updateState}/>

                    </div>
                    <button id="register" type="submit">Registrar</button>
                </Form>
            </div>
    )
}

export default Cadastro;