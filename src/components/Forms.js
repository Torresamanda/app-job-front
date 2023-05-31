import React, { useState } from "react";

import styled from "styled-components";

export default function Forms({ handleSubmit, projectData }) {
    const [jobs, setJobs] = useState(projectData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(jobs)
    }

    function handleChange(e) {
        setJobs({ ...jobs, [e.target.name]: e.target.value })
    }

    return (
        <Form onSubmit={submit}>
            <Inputs>
                <Label>Nome</Label>
                <Input
                    type="text"
                    text="Nome da vaga"
                    name="name"
                    placeholder="Insira o nome da vaga"
                    onChange={handleChange}
                    value={jobs.name ? jobs.name : ''}
                />
            </Inputs>

            <Inputs>
                <Label>Linguagens</Label>
                <Input
                    type="text"
                    text="Linguagens da vaga"
                    name="linguagens"
                    placeholder="Ex: React/Nodejs"
                    onChange={handleChange}
                    value={jobs.linguagens ? jobs.linguages : ''}
                />
            </Inputs>

            <Inputs>
                <Label>Região</Label>
                <Input
                    type="text"
                    text="Região da vaga"
                    name="regiao"
                    placeholder="EX: Remoto ou presencial"
                    onChange={handleChange}
                    value={jobs.regiao ? jobs.regiao : ''}
                />
            </Inputs>

            <Inputs>
                <Label>Tipo</Label>
                <Input
                    type="text"
                    text="Tipo da vaga"
                    name="tipo"
                    placeholder="Ex: Pleno/Sênior/Júnior"
                    onChange={handleChange}
                    value={jobs.tipo ? jobs.tipo : ''}
                />
            </Inputs>

            <Inputs>
                <Label>Salário</Label>
                <Input
                    type="text"
                    text="Salario da vaga"
                    name="salario"
                    placeholder="Ex: 5000"
                    onChange={handleChange}
                    value={jobs.salario ? jobs.salario : ''}
                />
            </Inputs>

            <Inputs>
                <Label>Link da vaga</Label>
                <Input
                    type="text"
                    text="link da vaga"
                    name="link"
                    placeholder="Ex: linkedin.com.br"
                    onChange={handleChange}
                    value={jobs.link ? jobs.link : ''}
                />
            </Inputs>

            <Inputs>
                <Label>Descrição</Label>
                <Textarea
                    type="text"
                    text="descrição da vaga"
                    name="descricao"
                    placeholder="Escreva a descrição da vaga"
                    onChange={handleChange}
                    value={jobs.descricao ? jobs.descricao : ''}
                />
            </Inputs>

            <SubmitButton>Adicionar Vaga</SubmitButton>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-top: 1px solid rgba(0, 0, 0, 1);
    padding: 20px;
    margin-bottom: 55px;
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

const Label = styled.label`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
`

const Input = styled.input`
    width: 500px;
    height: 20px;
    border-radius: 20px;
    border: none;
    box-shadow: 0px 4px 20px #12131F;
    padding: 8px;
`

const Textarea = styled.textarea`
    width: 500px;
    height: 90px;
    border-radius: 20px;
    border: none;
    box-shadow: 0px 4px 20px #12131F;
    padding: 8px;

    @media(max-width: 1300px) {
        height: 150px;
    }
`

const SubmitButton = styled.button`
  width: 510px;
  background-color: #12131F;
  color: #E5E5E5;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;

  @media(max-width: 1300px) {
        margin-top: 20px;
  }
`