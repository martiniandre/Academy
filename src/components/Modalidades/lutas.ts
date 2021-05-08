import Judo from '../../assets/judo.jpg'
import Karate from '../../assets/karate.jpg'
import Jiu from '../../assets/jiu-jitsu.jpg'
import Taekwondo from '../../assets/taekwondo.jpg'

interface ILutas{
    img:string,
    nome:string,
    professor:string
}
const Lutas:ILutas[] = [
    {   
        img:`${Judo}`,
        nome:"Judo",
        professor:"Andre"
    },
    {
        img:`${Karate}`,
        nome:"Karate",
        professor:"Mateus"
    },
    {
        img:`${Taekwondo}`,
        nome:"Taekwondo",
        professor:"Mauro"
    },
    {   
        img:`${Jiu}`,
        nome:"Jiu Jitsu",
        professor:"Carlos"
    },
]

export default Lutas