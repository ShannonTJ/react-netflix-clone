import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div``;

export const Frame = styled.div``;

export const Background = styled.div``;

export const Logo = styled.img``;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 1rem;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  line-height: normal;
  margin-top: 0.5rem;

  &:hover {
    background-color: #f40612;
  }
`;
