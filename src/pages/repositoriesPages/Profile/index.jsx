import React from "react";

import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/105761498?v=4" />
        <Login>kaioVinic</Login>
        <Name>Kaio Vinicius</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          <i>20 &nbsp; seguidores</i> &nbsp; &middot; &nbsp;10 &nbsp;
          <i> seguindo</i>
        </Data>
        <Data>
          {" "}
          <MdWork size={20} />
          Arcom
        </Data>
        <Data>
          <MdLocationCity size={20} />
          Salvador
        </Data>
        <Data>
          <MdLink size={20} />
          &nbsp;
          <a href="https://www.linkedin.com/in/kaioviniciussilva/">Linkedln</a>
        </Data>
      </Inner>
    </Container>
  );
}

export default Profile;
