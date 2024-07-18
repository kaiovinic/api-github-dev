import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg";

async function checkLoginExists(login) {
  try {
    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();
    return data.login;
  } catch (error) {
    console.error("Erro na verificação do login:", error);
  }

  return false;
}

function MainPage() {
  const [login, setLogin] = useState("");
  const [userFound, setUserFound] = useState(true);

  const handleSearch = async () => {
    try {
      const loginExists = await checkLoginExists(login);

      if (loginExists) {
        window.location.href = `/${login}/repositories`;
      } else {
        setUserFound(false);
      }
    } catch (error) {
      console.error("Erro na verificação do login:", error);
    }
  };

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          type="text"
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button onClick={handleSearch}>
          <MdSearch size={42} />
        </Button>
        {!userFound && <p>Usuário não encontrado</p>}
      </Form>
    </Container>
  );
}

export default MainPage;
