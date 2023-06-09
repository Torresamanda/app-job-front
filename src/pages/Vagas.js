import React, { useState } from "react"

import styled from "styled-components"

import BannerJobs from "../components/BannerJobs"
import Footer from "../components/Footer"
import Forms from "../components/Forms"
import Message from "../components/Message"

import background from '../imgs/background.png'


export default function Vagas() {
    const [jobMessage, setJobMessage] = useState('')

    const data = (job) => new URLSearchParams(job).toString()

    function createJob(jobs) {
        fetch('http://localhost:8000/api/job', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: data(jobs)

        })
            .then(response => response.json())
            .then((data) => {
                setJobMessage('Vaga criada com sucesso!')
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
            {jobMessage && <Message msg={jobMessage} />}
            <Container>
                <Forms handleSubmit={createJob} />
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