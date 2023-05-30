import styled from "styled-components";
import Navbar from "./Navbar";

export default function Banner({background, titulo, msg, router}) {
    return (
        <>
            <Container>
                <Img src={background} alt="background-banner" />
                <Navbar msg={msg} router={router}/>

                <Infos>
                    <H3>{titulo}</H3>
                </Infos>

            </Container>
        </>
    )
}

const Container = styled.div`
    height: 400px;
`

const Img = styled.img`
    position: absolute;
    width: 100%;
    top: 60px;
`

const Infos = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    top: 15%;
    left: 35%;

    @media(max-width: 1300px) {
        top: 15%;
        left: 40%;
    }
`

const H3 = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    color: #000000;
`

