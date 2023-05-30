import styled from "styled-components"

import BannerJobs from "../components/BannerJobs"
import Footer from "../components/Footer"
import Forms from "../components/Forms"

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
                <Forms/>
            </Container>
            <Footer/>
        </>
    )
}


const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`