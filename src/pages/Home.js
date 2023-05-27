import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Message from "../components/Message";

import background from '../imgs/image01.png'

export default function Home() {
  const [getAllJobs, setGetAllJobs] = useState([])
  const [jobMessage, setJobMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:8000/api/jobs', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((respose) => respose.json())
      .then((json) => setGetAllJobs(json.result))
      .catch(err => console.log('Erro de solicitação', err))
  }, [])

  function deleteJobs(id) {
    fetch(`http://localhost:8000/api/job/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setGetAllJobs(getAllJobs.filter((job) => job.id !== id))
        setJobMessage('Vaga removida com sucesso!')

      })
      .catch(err => console.log('Erro de solicitação', err))
  }

  return (
    <>
      <Banner
        background={background}
        msg={'Adicionar vagas'}
        titulo={'As melhores vagas para você 💻'}
        mensagem={'Aqui você encontra vagas da área '}
        text={'de tecnologia com facilidade e velocidade'}
        router={'/vagas'}
      />
      {message && <Message msg={jobMessage} />}
      {jobMessage && <Message msg={jobMessage} />}
      <Container>
        {getAllJobs.length > 0 &&
          getAllJobs.map((job) => (
            <Cards
              key={job.id}
              id={job.id}
              name={job.name}
              linguagens={job.linguagens}
              regiao={job.regiao}
              tipo={job.tipo}
              salario={job.salario}
              link={job.link}
              descricao={job.descricao}
              handlerRemove={deleteJobs}
            />
          ))}
        {getAllJobs.length === 0 && (
          <P>Não há vagas para exibir!</P>
        )}
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
    height: 100vh;
    overflow-y: auto;
    padding: 20px;
    margin: 15px 200px 15px 200px;


    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #12131F; 
        border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #D96429; 
        border-radius: 10px;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media(max-width: 1300px) {
      margin: 30px 400px 30px 400px;
    }
`

const P = styled.p`
  color: gray;
  font-size: 15px;
  letter-spacing: 5px;
  text-transform: uppercase;
  padding: 25px;
`