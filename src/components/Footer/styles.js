import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
  margin-left: 0.5rem;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-left: 0.5rem;
`;
