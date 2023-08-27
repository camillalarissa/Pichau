import React, { useState, useRef, } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import People from '../../assets/people.svg'
import Arrow from '../../assets/seta.svg'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainersItens'
import Button from '../../components/button'


import {
    Container,
    Image,
    InputLabel,
    Input,
    
} from "../../Containers/Home/styles";

//jsx tras poderes na nossa aplicaçao utilizando entre {}

function App() {
    const [users, setUsers] = useState([]);
    const history = useHistory()
    const inputName = useRef();
    const inputAge = useRef();

    async function addNewUser() {
        const { data: newUser } = await axios.post("http://localhost:3005/users", { name: inputName.current.value, age: inputAge.current.value });


        setUsers([...users, newUser]);
        history.push("/usuarios")
    }

    // React criou o ESTADO que é uma variavel, eu alterando esta ele renderiza a tela novamente 
// PROPS => PROPRIEDADES
    return (
        <Container>
            <Image alt="logo-imagem" src={People} />
            <ContainerItens>
                <H1>Olá!</H1>
                <InputLabel>Nome </InputLabel>
                <Input ref={inputName} placeholder="Nome" />
                <InputLabel>Idade</InputLabel>
                <Input ref={inputAge} placeholder="Idade" />
                <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>
            
            </ContainerItens>
        </Container>
    );

}

export default App