import styled from "styled-components"

import BannerJobs from "../components/BannerJobs"
import Footer from "../components/Footer"
import Forms from "../components/Forms"

import background from '../imgs/background.png'

export default function Vagas() {

    function createJob(jobs) {
        fetch('http://localhost:8000/api/job', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            
            body: JSON.stringify(jobs)
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
            <BannerJobs
                msg={"Voltar"}
                router={'/'}
                titulo={'Adicionar Vagas'}
                background={background}
            />
            <Container>
                <Forms handleSubmit={createJob}/>
            </Container>
            <Footer />
        </>
    )
}


const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`