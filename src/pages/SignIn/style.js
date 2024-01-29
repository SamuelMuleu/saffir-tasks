import styled from "styled-components";
import { theme, COLORS_THEME } from "../../styles/theme";

const Container = styled.div`

background-color: ${theme.BACKGROUND_BLUE};
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
padding: 80px;
position: relative;
form{
    display: flex;
    flex-direction:column;
    padding: 20px;
    gap: 15px;
}

img{

}

    ::placeholder{
        padding-left:2%;
        color: white;
       font-weight: 1000;
        text-align: center;
    
    }





.svg-container{
position: absolute;
margin-top: 2px;
margin-left: 6px;
color: white;


    }
.svg-container2{
position: absolute;
margin-top: 2px;
margin-left: 6px;
color: white;
    }


`;

export { Container };