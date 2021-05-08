interface Modalidade{
    nome:string
    professor:string
    horario: string
}

export interface IUser{
    username:string
    email:string
    telefone:string
    password:string
    endereco:string
    numero:string
    modalidade?:Modalidade[]
}