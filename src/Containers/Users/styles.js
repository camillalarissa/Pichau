import styled from 'styled-components'
import Backgroud from '../../assets/back2.svg'





export const Container = styled.div`

 background: url("${Backgroud}");
 background-size:cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 40px;
 height: 100%;
 min-height: 100vh; 

`;


export const Image = styled.img`
margin-top: 30px;
width: 20%;
`;



export const User = styled.li`
display: flex;
align-items: center;
justify-content: space-around;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

width: 342px;
height: 58px;
outline: none;

margin-top: 24px;


p{
color: #FFFf;
font-family: Roboto;
font-size: 19px;
font-style: normal;
font-weight: bold;
line-height: normal;
letter-spacing: 0.9px;


}

button{
    background: none;
    border: none;
    cursor: pointer;

}

`