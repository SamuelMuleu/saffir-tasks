import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`


position: relative;

padding-top: 50%;

.saffirlogo{
    position: absolute;
left: -25%;
bottom:80%;
    width:120%;


}

.content{
border: ${COLORS_THEME.GOLD_YELLOW} 3px solid;
border-radius: 25px;
}
.login{
    
    margin-bottom: 8px;
    img{
        

    
            width: 150px;
   padding-left: 70px;
    background: transparent;
    padding-top: 20px;

    
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
const ReturnLogin = styled.span`
position: absolute;
left: 28%;
bottom: -10%;
font-size: 1.2rem;
color: white;


`

export { Container, Button, ReturnLogin };