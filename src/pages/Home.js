import React, { useEffect, useState } from "react";

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
      {getAllJobs.map((job) => (
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
      <Footer />
    </>
  );
}

export default Home;
