import styled from "styled-components";
import Navbar from "./Navbar";

import background from '../imgs/image01.png'

export default function Banner() {
    return (
        <>
            <Container>
                <Img src={background} alt="background-banner" />
                <Navbar />

                <Infos>
                    <H3>As melhores vagas <span>para você</span> 💻 </H3>
                    <P>Aqui você encontra vagas <span>da área</span>  <br /> de tecnologia com facilidade e <span>velocidade</span></P>
                </Infos>

            </Container>
        </>
    )
}

const Container = styled.div`
    height: 85vh;

    @media(max-width: 1300px) {
        height: 90vh;
    }
`

const Img = styled.img`
    position: absolute;
    top: -40px;
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

