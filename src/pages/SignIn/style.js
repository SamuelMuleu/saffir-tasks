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

h1{
    color: ${COLORS_THEME.GOLD_YELLOW};
     font-family: "Alice", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 5rem;


}
p{
   color: ${COLORS_THEME.GOLD_YELLOW};
     font-family: "Alice", sans-serif;
  font-weight: 400;
  font-style: normal;  
 letter-spacing: 2px;
}
img{

}


    ::placeholder{
        padding-left:2%;
        color: white;
       font-weight: 1000;
        text-align: center;
    
    }

.title{
position:absolute;
top:34%;
right: 28%;

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


.content{

    border: 1px solid ${COLORS_THEME.GOLD_YELLOW};
    border-radius:25px;

}
.title{
position: absolute;
top: 30%;
right: 26%;
}
`;

export { Container };