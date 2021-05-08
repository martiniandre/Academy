import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import PublicLinks from './PublicLinks'
import SignedLinks from './SignedLinks'
import './styles.css'


const Navbar = () => {
    const { signed } = useContext(AuthContext)
    /* function getWindowPosition(){
        if(window.pageYOffset > 32){
           setWindowPosition('fixed')
        }else{
            setWindowPosition("")
        }
    }
    window.addEventListener('scroll',getWindowPosition) */

    const NavLinks = signed 
    ?  SignedLinks.map((sl,index) => ( <a key={ index } href={ sl.path }> { sl.name } </a> )) 
    :  PublicLinks.map((pl,index) => ( <a key={ index } href={ pl.path }> { pl.name } </a>))

    return(
    <nav> 
        <div className="items">
            <h1>My Hero Academy</h1>
            
            <div className="menu-links">
                {NavLinks}
            </div>
        </div>
    </nav>
    )
}


export default Navbar;