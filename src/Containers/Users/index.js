import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/seta.svg'
import Trash from '../../assets/lixeira.svg'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainersItens'
import Button from '../../components/button'
import {
    Container,
    Image,
    User
} from "../../Containers/Users/styles";

//jsx tras poderes na nossa aplicaçao utilizando entre {}


function Users() {
    const [users, setUsers] = useState([]);
    const history = useHistory()



    useEffect(() => {
        async function fetchuUsers() {
            const { data: newUsers } = await axios.get("http://localhost:3005/users")

            setUsers(newUsers)

        }
        fetchuUsers()

    }, [])


    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3005/users/${userId} `)
        const newUsers = users.filter(user => user.id !== userId)
        setUsers(newUsers)


    }
    function goBackPage() {

        history.push("/")
    }
    // React criou o ESTADO que é uma variavel, eu alterando esta ele renderiza a tela novamente 

    return (
        <Container>
            <Image alt="logo-imagem" src={Avatar} />
            <ContainerItens isBlur={true}>
                <H1>Usuários</H1>



                <ul>
                    {users.map((user) => (

                        <User key={user.id}>
                            <p>{user.name}</p> <p>{user.age}</p>
                            <button onClick={() => deleteUser(user.id)} > <img src={Trash} alt="LataLixo" /> </button>
                        </User>

                    ))}
                </ul>

                <Button isBack={true} onClick={goBackPage} > <img alt="seta" src={Arrow} /> Voltar </Button>

            </ContainerItens>
        </Container>
    );

}

export default Users;