import { FormEvent, useContext, useState,useRef } from "react"
import { useMutation } from '@apollo/client'
import {modalidadeRegister} from "../../../../services/user"
import Options from "../../../Form/Options"
import './styles.css'
import { AuthContext } from "../../../../context/authContext"

interface IFormValues{
        nome:string,
        professor:string,
        horario:string,
        dSemana:string
}

const MatriculaForm = () => {
    const { user } = useContext(AuthContext)
    const inputRef = useRef<HTMLInputElement>()
    const [formValues,setFormValues] = useState<IFormValues | undefined>(undefined)
    const [confirm,setConfirm] = useState(false)
    const lutas = [
        {nome:"Karate",professor:"Fallen", horario:"17:30",dSemana:"terça"},
        {nome:"Judo",professor:"FerGod", horario:"12:30",dSemana:"terça"},
        {nome:"Takaewndo",professor:"TACO", horario:"19:30",dSemana:"terça"},
        {nome:"Jiu-Jitsu",professor:"FNX", horario:"20:00",dSemana:"terça"}
    ]
    function updateOptionState(e:React.ChangeEvent<HTMLInputElement>){
        if(e.currentTarget.value === ""){
            return setFormValues(undefined);
        }
        const matricula = lutas.find(lt => lt.nome.toLowerCase() === e.currentTarget.value.toLowerCase())
        setFormValues(matricula)       
    }
    function generateOthersOptions(){
        const renderOption = formValues ?
            <>
            <label htmlFor="professor">Professor</label>
            <select name="professor" id="professor" >
                <option value={formValues?.professor} aria-disabled="true">{formValues?.professor}</option>
            </select>
            <label htmlFor="professor">Horário: </label>
            <select name="horario" id={formValues?.nome}>
            <option value={formValues?.horario} aria-disabled="true">{formValues?.horario}</option>
            </select>
            <label htmlFor="dia-da-semana">Dia da semana</label>
            <select name="dia-da-semana" id="dia-da-semana">
            <option value={formValues?.dSemana} aria-disabled="true">{formValues?.dSemana}</option>
            </select>
            <button 
            type="submit" 
            onClick={OnSubmit}
            style={{ background:"green", padding:"10px",marginTop:"10px" }}>
            Matricular-se </button>
            </>
        : null;
        return renderOption
    }
    const [ userData ] =  useMutation(modalidadeRegister,{
        onError:({message}) => /* setErrors(message) */ console.log(message)
    })
    const OnSubmit =  (e: FormEvent) => {
        userData({
                variables:{
                   data: {id:user._id, modalidades:formValues} 
                }
        })
        .then(() => {
            alert("Matricula realizada")
            setFormValues(undefined)
            
        })
        
    };

    return(
        <form style={{
            height:"60%",
        }} >
            <Options array={lutas} onChange={updateOptionState} inputRef={inputRef}/>
            {generateOthersOptions()}
        </form>
    )
}

export default MatriculaForm