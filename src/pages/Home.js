import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Banner from '../components/Banner';
import Message from '../components/Message';
import Footer from '../components/Footer';
import Forms from '../components/Forms';
import Cards from '../components/Cards';

import background from '../imgs/image01.png'

export default function Home() {
  const [getAllJobs, setGetAllJobs] = useState([]);
  const [jobMessage, setJobMessage] = useState('');
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editJobId, setEditJobId] = useState(null);
  const [editJobData, setEditJobData] = useState(null);

  const data = (job) => new URLSearchParams(job).toString()

  useEffect(() => {
    fetch('http://localhost:8000/api/jobs')
      .then((response) => response.json())
      .then((data) => {
        setGetAllJobs(data.result);
      })
      .catch((error) => console.log('Erro de solicitação', error));
  }, []);

  const deleteJob = (id) => {
    fetch(`http://localhost:8000/api/job/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGetAllJobs(getAllJobs.filter((job) => job.id !== id));
        setJobMessage('Vaga removida com sucesso!');
      })
      .catch((error) => console.log('Erro de solicitação', error));
  };

  const editJob = (id) => {
    setEditJobId(id);
    setEditJobData(getAllJobs.find((job) => job.id === id));
    setShowProjectForm(true);
  };

  const handleEditFormSubmit = (updatedJob) => {
    fetch(`http://localhost:8000/api/job/${editJobId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data(updatedJob),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedJobs = getAllJobs.map((job) => {
          if (job.id === editJobId) {
            return { ...job, ...updatedJob };
          }
          return job;
        });
        setGetAllJobs(updatedJobs);
        setJobMessage('Vaga atualizada com sucesso!');
        setShowProjectForm(false);
        setEditJobId(null);
        setEditJobData(null);
      })
      .catch((error) => console.log('Erro de solicitação', error));
  };

  const closeEditForm = () => {
    setShowProjectForm(false);
    setEditJobId(null);
    setEditJobData(null);
  };

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
      {jobMessage && <Message msg={jobMessage} />}
      <Container>
        {getAllJobs.length > 0 ? (
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
              handlerRemove={deleteJob}
              handleEdit={editJob}
            />
          ))
        ) : (
          <P>Não há vagas para exibir!</P>
        )}
      </Container>

      {showProjectForm && (
        <Modal closeModal={closeEditForm}>
          <Forms
            handleSubmit={handleEditFormSubmit}
            job={editJobData}
            text={'Atualizar Vaga'}
          />
        </Modal>
      )}

      <Footer />
    </>
  );
}

const Container = styled.div`
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(154, 62, 62, 0.8);

`