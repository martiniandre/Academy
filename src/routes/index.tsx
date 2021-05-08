
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {AuthProvider} from '../context/authContext';


import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Matricula from '../pages/Matricula'
import MinhasMatriculas from '../pages/MinhasMatriculas';

const Routes = () => {

    return(
    <AuthProvider>
        <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/registrar" exact component={Cadastro}/>
        <Route path="/matricula" exact component={Matricula}/>
        <Route path="/minhas-matriculas" exact component={MinhasMatriculas}/>
    </Router>
    </AuthProvider>
    )
}
export default Routes;