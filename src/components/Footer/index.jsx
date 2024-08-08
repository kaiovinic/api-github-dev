import React from "react";
import { Container, Text, Link } from "./styles";

function Footer() {
  return (
    <Container>
      <Text>
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://www.linkedin.com/in/kaioviniciussilva/"
          target="_blank"
          rel="noreferrer"
        >
          <span>KAIO VINICIUS </span>
        </Link>
        - TODOS OS DIREITOS RESERVADOS.
      </Text>
    </Container>
  );
}

export default Footer;
