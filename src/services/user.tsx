import { gql } from '@apollo/client'

export const Register = gql`
    mutation register($data:Fields!){
    createUser(data:$data){
        username
        email
        telefone
        endereco
    }} 
`
export const signIn = gql`
    mutation Logar($data:signIn){
        signIn(data:$data){
            _id
            username
            token
        }
    }
`
export const getUser = gql`
    query userData($username:String!){
        getUser(username:$username){
                username
                modalidades{
                nome
                professor
                horario
                dSemana
            }
        }
    }
`
export const modalidadeRegister = gql`
    mutation modalidadeRegister($data: Matricula!){
        modalidadeRegister(data:$data){
            username
        }
    }
`