import styled from 'styled-components'
import Backgroud from './assets/background.svg'




export const Container = styled.div`

 background: url("${Backgroud}");
 background-size:cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 40px;
 height: 100vh;

`;
export const Image = styled.img`
margin-top: 30px;
width: 15%;
`;

export const ContainerItens = styled.div`
background: linear-gradient(157.44deg, 
rgba(255,255,255,0.6) 0.84%,
 rgba(255,255,255,0.6) 0.85%, 
 rgba(255,255,255,0.15) 100%);
 border-radius: 61px 61px 0px 0px;
 padding: 50px 36px;
 display: flex;
 flex-direction: column;
 height: 100vh;
 
`;


export const H1 = styled.h1`
color: #FFF;
text-align: center;
font-family: Roboto;
font-size: 34px;
font-style: normal;
font-weight: bold;
line-height: normal;
margin-bottom: 80px;

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

export const Button = styled.button`
color: #FFF;
font-family: Roboto;
font-size: 17px;
font-style: normal;
font-weight: bold;
line-height: normal;
border-radius: 14px;
background: var(--templates-5-color-1, rgba(0, 0, 0, 0.80));
border: none;
width: 365px;
height: 74px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
    opacity: 0.8;

}
&:active{
    opacity: 0.5;
}
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