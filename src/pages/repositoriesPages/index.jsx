import React from "react";
import { Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

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

  // const repositories = [
  //   {
  //     name: "Repo 1",
  //     description: "Descrição",
  //     html_url: "https://devsamurai.com.br",
  //     languagem: "JavaScript",
  //   },
  //   {
  //     name: "Repo 2",
  //     description: "Descrição",
  //     html_url: "https://devsamurai.com.br",
  //     languagem: "JavaScript",
  //   },
  //   {
  //     name: "Repo 3",
  //     description: "Descrição",
  //     html_url: "https://devsamurai.com.br",
  //     languagem: "Golang",
  //   },
  //   {
  //     name: "Repo 4",
  //     description: "Descrição",
  //     html_url: "https://devsamurai.com.br",
  //     languagem: "Node",
  //   },
  //   {
  //     name: "Repo 5",
  //     description: "Descrição",
  //     html_url: "https://devsamurai.com.br",
  //     languagem: "TypeScript",
  //   },
  //   {
  //     name: "Repo 6",
  //     description: "Descrição",
  //     html_url: "https://devsamurai.com.br",
  //     languagem: "C#",
  //   },
  // ];

  // Calculo dos filters

  const languages = [
    { name: "JavaScript", count: 2, color: "#f1c40f" },
    { name: "TypeScript", count: 2, color: "#95a5a6" },
    { name: "Golang", count: 1, color: "#3498db" },
    { name: "Node", count: 1, color: "#e74c3c" },
  ];

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPages;
