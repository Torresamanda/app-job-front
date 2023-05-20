import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <Nav>
        <Link to={'/'}>
            <Button>Adicionar Vagas</Button>
        </Link>
      </Nav>
    );
  }

export const Nav = styled.div`
  height: 20px;
  background-color: #D96429;
  padding: 20px;

  display: flex;
  align-items: center;

  position: relative;
`
export const Button = styled.button`
  background-color: #12131F;
  color: #E5E5E5;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
` 