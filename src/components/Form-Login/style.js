import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`
position: relative;

padding-top: 50%;
.saffirlogo{
    position: absolute;
    left: -25%;
bottom:75%;
padding: 0%;

    width:120%;

}


.login{
    margin-bottom: 8px;
    img{

    
            width: 150px;
         
   padding-left: 70px;
    background: transparent;


    }
}
`;
const Button = styled.button`
border: none;
margin-top: 20px;
background-color: inherit;
    color: white;
border: ${COLORS_THEME.GOLD_YELLOW} 2px solid;
border-radius: 8px;
font-weight: 1000;
`;

const CreatAcount = styled.span`
position: absolute;
left: 36%;
bottom: -10%;
font-size: 1.2rem;
color: white;

`;

export { Container, Button, CreatAcount }