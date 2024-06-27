import React from "react";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";

function Repository() {
  return (
    <Container color="#f37272">
      <Name>Repository Name</Name>
      <Description>Repository Description</Description>
      <Footer color="#f37272">
        <Lang>Repository Lang</Lang>
        <Link
          href="https://github.com/kaiovinic"
          target="_blank"
          rel="noreferrer"
        >
          VER
        </Link>
      </Footer>
    </Container>
  );
}

export default Repository;
