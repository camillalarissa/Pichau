import React, { useState, useRef } from "react";

import axios from "axios";

import People from './assets/people.svg'
import Arrow from './assets/seta.svg'
import Trash from './assets/lixeira.svg'

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from "./styles";
//jsx tras poderes na nossa aplicaçao utilizando entre {}
function App() {
    const [users, setUsers] = useState([]);
    const inputName = useRef();
    const inputAge = useRef();

    async function addNewUser() {
        const data = await axios.post("http://localhost:3005/users", { name: inputName.current.value, age: inputAge.current.value })

        console.log(data)
        //setUsers([...users,{id: Math.random(), name: inputName.current.value, age: inputAge.current.value}])

    }

    function deleteUser(userId) {
        const newUsers = users.filter(user => user.id !== userId)
        setUsers(newUsers)

    }
    // React criou o ESTADO que é uma variavel, eu alterando esta ele renderiza a tela novamente 

    return (
        <Container>
            <Image alt="logo-imagem" src={People} />
            <ContainerItens>
                <H1>Olá!</H1>
                <InputLabel>Nome </InputLabel>
                <Input ref={inputName} placeholder="Nome" />
                <InputLabel>Idade</InputLabel>
                <Input ref={inputAge} placeholder="Idade" />
                <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow}/></Button>
                <ul>
                    {users.map((user) => (

                        <User key={user.id}>
                            <p>{user.name}</p> <p>{user.age}</p>
                            <button onClick={() => deleteUser(user.id)} > <img src={Trash}alt="LataLixo" /> </button>
                        </User>

                    ))}
                </ul>
            </ContainerItens>
        </Container>
    );

}

export default App