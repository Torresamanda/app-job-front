import styled from "styled-components";
import Navbar from "./Navbar";

export default function Banner({background, titulo, mensagem, text, msg, router}) {
    return (
        <>
            <Container>
                <Img src={background} alt="background-banner" />
                <Navbar msg={msg} router={router}/>

                <Infos>
                    <H3>{titulo}</H3>
                    <P>{mensagem}</P>
                    <P>{text}</P>
                </Infos>

            </Container>
        </>
    )
}

const Container = styled.div`
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,.20),rgba(255,255,255,.20) 100%);
`

const Img = styled.img`
    position: absolute;
    top: -60px;
    height: 100%;
`

const Infos = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    top: 30%;
    left: 25%;

    @media(max-width: 1300px) {
        top: 30%;
        left: 30%;
    }
`

const H3 = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    color: #E5E5E5;

    span {
        color: #D96429;
    }
`

const P = styled.p`
   font-family: 'Montserrat', sans-serif;
   font-size: 28px;
   text-align: center;
   font-weight: 500;
   letter-spacing: 4px;
   color: #E5E5E5;

   span {
    color: #12131F;
   }
`

