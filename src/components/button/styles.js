import styled from "styled-components";

export const Button = styled.button`
color: #FFF;
font-family: Roboto;
font-size: 17px;
font-style: normal;
font-weight: bold;
line-height: normal;
border-radius: 14px;
background:${props => props.isBack ? 'transparent' : ' rgba(0, 0, 0, 0.80)'};
border:${props => props.isBack ? '1px solid #ffffff' : 'none'};
width: 365px;
height: 74px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-top: 120px;

&:hover{
    opacity: 0.8;

}
&:active{
    opacity: 0.5;
}
img {

transform:${props => props.isBack && 'rotateY(180deg)'} ;
}
`;

