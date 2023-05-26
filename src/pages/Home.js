import React, { useEffect, useState } from "react";

import styled from "styled-components";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

function Home() {
  const [getAllJobs, setGetAllJobs] = useState([])

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

      })
      .catch(err => console.log('Erro de solicitação', err))
  }

  return (
    <>
      <Banner />
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

export default Home;


const Container = styled.div`
    height: 100vh;
    overflow-y: auto;
    padding: 20px;
    margin: 30px 400px 30px 400px;


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
`

const P = styled.p`
  color: gray;
  font-size: 15px;
  letter-spacing: 5px;
  text-transform: uppercase;
  padding: 25px;
`