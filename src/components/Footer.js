import styled from "styled-components";

export default function Footer() {
    return (
        <ContainerFooter>
            <P>2023 © Direitos Reservados</P>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
  height: 20px;
  background-color: #D96429;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const P = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #12131F;
`