import Lutas from './lutas'

import './styles.css'


const Modalidades = () => {
    return(
    <main id="modalidades">
        <h1>Confira as modalidades</h1>
        <article>
        {Lutas.map((luta,index) => (
            <section key={index}>
                <img src={luta.img} alt=""/>
                <div>
                        <h2>Modalidade: {luta.nome}</h2>
                        <span>Professor: {luta.professor}</span>
                </div>
            </section>
        ))}
        </article>
    </main>
   )
}
export default Modalidades