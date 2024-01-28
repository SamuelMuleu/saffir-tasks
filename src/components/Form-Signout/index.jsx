import { Container, Button, ReturnLogin } from "./style";

import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

import { Envelope, LockSimple, User } from "@phosphor-icons/react";

const FormSignout = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/saffir-tasks/signin");
  };

  return (
    <Container>
      <div>
        <img className="saffirlogo" src="./saffirlogo.png" alt="" />{" "}
      </div>
      <div className="content">
        <div className="login">
          <img src="../656952.png" alt="" />
        </div>

        <div className="form">
          <form>
            <Input
              type="text"
              svg={<User className="svg-container" />}
              placeholder="Nome"
            />
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

            <Button>Cria Usuario</Button>
          </form>
        </div>
      </div>
      <ReturnLogin onClick={handleNavigateHome}>
        Voltar para o Login
      </ReturnLogin>
    </Container>
  );
};

export default FormSignout;
