import { FormEvent, useState } from 'react';
import Cookies from 'js-cookie'
import './styles.css'
import { useHistory } from 'react-router-dom'

import Form from '../../components/Form';
import { Text } from '../../components/Form/Field';


import { signIn } from '../../services/user';
import { useMutation } from '@apollo/client';

const Login =  () => {
     const history = useHistory(); 

    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const [errors,setErrors] = useState<string | null>(null)
    const [ userData ] =  useMutation(signIn,{
        onError:({message}) => setErrors(message)
    })
    const OnSubmit =  (e: FormEvent) => {
        e.preventDefault()
        userData({
                variables:{
                   data: user,
                }, 
        }).then(resp => resp.data)
        .then(({signIn}) => {
            const { _id,username,token } = signIn
            console.log(_id,username,token)
            Cookies.set("token",JSON.stringify(token))
            Cookies.set("user",JSON.stringify({_id,username}))            
            history.goBack()
    })
    };
    function updateState(e:React.ChangeEvent<HTMLInputElement>){
        const { name, value } = e.target
        setUser({...user, [name]: value})
        console.log(user)
 }
    return(
            <div className="form-container">
                <Form onSubmit={OnSubmit}>
                    <h2>Login</h2>
                    {errors && <p>{errors}</p>}
                       
                        <Text label="email" type="text" value={user.email} onChange={updateState} />

                    <Text label="password" type="password" value={user.password} onChange={updateState}/>

                    <button id="register" type="submit">Logar</button>
                </Form>
            </div>
    )
}

export default Login;