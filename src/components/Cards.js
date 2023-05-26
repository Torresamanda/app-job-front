import styled from "styled-components";

import logoMap from '../imgs/location_on.png'
import logoWork from '../imgs/work.png'
import logoSalary from '../imgs/attach_money.png'
import logoDelete from '../imgs/delete.png'

export default function Cards({ id, name, regiao, tipo, salario, descricao, link, linguagens, handlerRemove }) {

    const removeJob = (e) => {
        e.preventDefault()
        handlerRemove(id)
    }


    return (
        <>
            <Container>
                <BoxCards>
                    <Card key={id} id={id}>
                        <Header>
                            <H3>{name}</H3>
                            <Delete onClick={removeJob}>
                                <Imgs src={logoDelete} alt="delete" />
                            </Delete>
                        </Header>
                        <ButtonsLanguages>
                            <ButtonLanguage>{linguagens}</ButtonLanguage>
                        </ButtonsLanguages>
                        <InfosJob>
                            <Imgs src={logoMap} alt="location" />
                            <TextJob>{regiao}</TextJob>
                            <Imgs src={logoWork} alt="work" />
                            <TextJob>{tipo}</TextJob>
                        </InfosJob>
                        <InfoJobSalary>
                            <ImgSalary src={logoSalary} alt="salary" />
                            <p>{salario}</p>
                        </InfoJobSalary>
                        <Description>
                            <DescriptionText>
                                <H5>Descrição:</H5>
                                <TextDescription>{descricao}</TextDescription>
                            </DescriptionText>
                            <ButtonSaibaMais href={link} target="_blank">Saiba Mais</ButtonSaibaMais>
                        </Description>
                    </Card>
                </BoxCards>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: relative;

    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 30px 0px 30px 0px;

`
const BoxCards = styled.div`

`

const Card = styled.div`
    width: 800px;
    height: auto;
    background-color: #D96429;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
`

const Imgs = styled.img`
    width: 18px;
`


const ImgSalary = styled.img`
    width: 10px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const H3 = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    margin-bottom: 10px;
`

const Delete = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

const ButtonsLanguages = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 8px;
`

const ButtonLanguage = styled.button`
    border: 5px solid #12131F;
    background-color: transparent;
    border-radius: 10px;
    padding: 8px 26px;
    color: #12131F;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    margin: 0px;

    &:hover {
        color: #E5E5E5;
        background-color: #12131F;
    }
`

const InfosJob = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
`

const TextJob = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: bold;
    margin-right: 18px;
    color: #12131F;
`

const InfoJobSalary = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding-left: 4px;
    margin-bottom: 10px;

     p {
        margin: 0px;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-weight: bold;
     }
`

const Description = styled.div`
    display: flex;
    align-items: center;
`

const DescriptionText = styled.div`
    width: 95%;
`

const H5 = styled.h5`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    margin: 0px;
    padding-left: 4px;
`

const TextDescription = styled.p`
    margin: 0px;
    padding-left: 4px;
`

const ButtonSaibaMais = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    text-decoration: none;
    border-radius: 10px;
    padding: 8px 26px;
    color: #E5E5E5;
    background-color: #12131F;
    cursor: pointer;

    position: relative;
    top: 5px;
`