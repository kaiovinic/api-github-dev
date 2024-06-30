import React from "react";
import PropTypes from "prop-types";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";

function Repository({ repository }) {
  return (
    <Container color="#f37272">
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color="#f37272">
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank" rel="noreferrer">
          VER
        </Link>
      </Footer>
    </Container>
  );
}

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};

export default Repository;
