import { IUser } from "../types/user";


function validate(data:IUser){
    const errors:any = {}
    if(data.username.trim() === ""){
        errors.username.push("Username cannot be empty")
    }
    if(data.username.length <= 6){
        errors.username.push("Username must be bigger then 6 character")
    }
    if(data.email.trim() === ""){
        errors.email.push("Username cannot be empty")
    }/* else{
        const regex:any = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
        if(!data.email.match(regex)){
            errors.email.push("Username must be valid")
        }
    } */
    if(data.telefone.trim() === ""){
        errors.telefone.push("Telefone cannot be empty")
    }else{
        const regex:any = "([0-9]{2,3})?([0-9]{2})([0-9]{4,5})([0-9]{4})"
        if(!data.telefone.match(regex)){
            errors.email.push("Telefone must be valid")
        }
    }
}

export default validate