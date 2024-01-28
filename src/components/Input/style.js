import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";


const Container = styled.div`

input{
    background-color: inherit;
    color: white;
border: ${COLORS_THEME.GOLD_YELLOW} 2px solid;
border-radius: 8px;

}
.svg-container.hidden {
  display: none; 
}

`;

export default Container;