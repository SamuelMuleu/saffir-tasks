import { Container, Button, CreatAcount } from "./style";

import { useNavigate } from "react-router-dom";

import Input from "../../components/Input";

import { Envelope, LockSimple } from "@phosphor-icons/react";

const Form = () => {
  const navigate = useNavigate();

  const handleCreatAcount = () => {
    navigate("/saffir-tasks/signout");
  };
  return (
    <Container>
      <div>
        <img className="saffirlogo" src="./saffirlogo.png" alt="" />
      </div>
      <div className="content">
        <div className="login">
          <img src="./saffiruser.png" alt="" />
        </div>

        <div className="form">
          <form>
            <Input
              svg={<Envelope className="svg-container" />}
              type="text"
              placeholder="Email"
            />
            <Input
              type="password"
              placeholder="Senha"
              svg={<LockSimple className="svg-container2" />}
            />
            <Button>LOGIN</Button>
          </form>
        </div>
      </div>
      <CreatAcount onClick={handleCreatAcount}> Cria conta</CreatAcount>
    </Container>
  );
};
export default Form;
