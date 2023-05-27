import styled from "styled-components"

import BannerJobs from "../components/BannerJobs"
import Footer from "../components/Footer"

import background from '../imgs/background.png'

export default function Vagas() {
    return (
        <>
            <BannerJobs 
                msg={"Voltar"}
                router={'/'}
                titulo={'Adicionar Vagas'}
                background={background}
            />
            <Container>

            </Container>
            <Footer/>
        </>
    )
}


const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`