import React from "react";
import { Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { getLangsFrom } from "../../services/api";

function RepositoriesPages() {
  const user = {
    login: "kaiovinic",
    name: "Kaio",
    avatar_url: "https://avatars.githubusercontent.com/u/105761498?v=4",
    followers: 0,
    following: 0,
    company: null,
    blog: "",
    location: "SALVADOR-BA",
  };

  const repositories = [
    {
      id: " 1",
      name: "Repo 1",
      description: "Descrição",
      html_url: "https://devsamurai.com.br",
      language: "JavaScript",
    },
    {
      id: "2",
      name: "Repo 2",
      description: "Descrição",
      html_url: "https://devsamurai.com.br",
      language: "JavaScript",
    },
    {
      id: " 3",
      name: "Repo 3",
      description: "Descrição",
      html_url: "https://devsamurai.com.br",
      language: "Golang",
    },
    {
      id: "4",
      name: "Repo 4",
      description: "Descrição",
      html_url: "https://devsamurai.com.br",
      language: "Node",
    },
    {
      id: " 5",
      name: "Repo 5",
      description: "Descrição",
      html_url: "https://devsamurai.com.br",
      language: "TypeScript",
    },
    {
      id: "6",
      name: "Repo 6",
      description: "Descrição",
      html_url: "https://devsamurai.com.br",
      language: "C#",
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
}

export default RepositoriesPages;
