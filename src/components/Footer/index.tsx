import './styles.css'

const Footer = () => {
    return(
        <footer className="subscribe">
            <h1>OBTENHA TODAS AS<span> OFERTAS ESPECIAIS</span></h1>
            <h2><em> REGISTRANDO-SE </em> POR NOVAS NOTÍCIAS</h2>
            <div>
            <input type="email" name="email" placeholder="enter your email address"/>
            <button>Inscreva-se</button>
            </div>
        </footer>
    )
}
export default Footer;