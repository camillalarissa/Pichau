import styled from 'styled-components'
import Backgroud from '../../assets/back1.svg'





export const Container = styled.div`

 background: url("${Backgroud}");
 background-size:cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 20px;
 
 

`;


export const Image = styled.img`
margin-top: 30px;
width: 15%;
`;






export const InputLabel = styled.p`

color: #EEE;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 122.222% */
letter-spacing: -0.408px;
margin-left: 25px;


`;
export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
width: 342px;
height: 58px;
outline: none;
padding-left: 25px;

color: #FFF;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 24px;
`;



