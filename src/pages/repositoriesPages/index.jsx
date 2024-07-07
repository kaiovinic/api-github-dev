import React, { useState, useEffect } from "react";
import { Loading, Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { getUser, getRepos, getLangsFrom } from "../../services/api";

function RepositoriesPages() {
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // getUser();

      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser("kaiovinic"),
        getRepos("kaiovinic"),
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);

      setLanguages(getLangsFrom(repositoriesResponse.data));

      setLoading(false);
    };
    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPages;
