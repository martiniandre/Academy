import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { useQuery } from '@apollo/client'
import {getUser} from '../../services/user'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './styles.css'

interface IModalidade{
    nome:string
    professor:string
    horario:string
    dSemana:string
}

const MinhasMatriculas = () => {
    const { user } = useContext(AuthContext)
    const [ userData,setUserData ] = useState<IModalidade[]>([])
    const [error,setError] = useState("")
    useQuery(getUser,{
        fetchPolicy:'network-only',
        onCompleted:(data) => setUserData(data.getUser.modalidades),
        onError:() => setError("Falha ao encontrar suas matricuals"),
        variables:{
            username:user.username
        }
    })
    const history = useHistory()
    console.log(user)
    return(
        <div>
            <Navbar/>
            <main className="modalidades">
            <button className="matricular" onClick={() => history.replace("/matricula")}>Matricule-se</button>
            <section className="cards">
            {error && <p>{error}</p>}
             {userData.map((modalidade:IModalidade) => {
               return ( 
                        <section className="card" key={modalidade.nome}>
                            <div className="information">
                                <h2>{modalidade.nome}</h2>
                                <b>Professor: {modalidade.professor}</b>
                                <em>{modalidade.dSemana}<i>Horário: {modalidade.horario}</i></em>
                            </div>
                   </section>
               )})}
               </section>
        </main>
           <Footer/>
        </div>
    )
}
export default MinhasMatriculas