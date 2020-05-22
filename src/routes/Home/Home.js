import React, { Fragment, useState, useEffect } from 'react'
import Text from 'components/Text'
import Link from 'components/Link'
import styled, { keyframes } from 'styled-components'

const WELCOME_MESSAGES = [
  'Bem vindo, meu nome é',
  'Welcome, my name is',
  'Bienvenido, mi nombre es',
  'Benvenuto, mi chiamo',
  'Bienvenue, mon nom est',
  'Willkommen, mein Name ist',
  'Добро пожаловать, меня зовут,',
  '欢迎，我叫',
  'ようこそ、私の名前は',
  'مرحبًا ، اسمي'
]

const Welcome = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Text color='white' size='big' fontFamily='Helvetica' lineHeight='2' textAlign='center'>
      {WELCOME_MESSAGES[seconds % WELCOME_MESSAGES.length]}
    </Text>
  )
}

const Home = () => {
  return (
    <Fragment>
      <Translations>
        <TextButton color='white' fontFamily='Helvetica'>
          BR
        </TextButton>
        <Divider />
        <TextButton color='white' fontFamily='Helvetica'>
          EN
        </TextButton>
      </Translations>
      <Container>
        <Welcome />
        <Appear>
          <Link
            variant='external'
            href='https://github.com/eduardobittencourt'
            target='_blank'
            color='white'
            textDecoration='none'
            fontFamily='Helvetica'
            fontSize='40px'
            textAlign='center'
          >
            Eduardo Bittencourt
          </Link>
        </Appear>
      </Container>

      <ContainerText>
        <Side variant='right'>
          <Text color='white' fontFamily='Helvetica' fontSize='24px' textAlign='right'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non luctus purus, quis euismod nisi.
            Curabitur sagittis id nunc in efficitur. Aenean quam tortor, pharetra a est vulputate, lobortis sagittis
            quam. Donec nec purus sed leo faucibus posuere a et quam. Mauris justo enim, tempus laoreet lorem non,
            finibus pharetra ante. Proin pellentesque nulla a leo efficitur faucibus. Cras posuere tempor ante sed
            tempor. Duis orci turpis, vehicula nec eleifend sit amet, fermentum euismod lorem. Maecenas feugiat feugiat
            rhoncus. Curabitur turpis nunc, consectetur eu blandit in, consectetur in mauris.
          </Text>
        </Side>
      </ContainerText>
    </Fragment>
  )
}

const Translations = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
`
const TextButton = styled(Text)`
  cursor: pointer;
`
const Divider = styled.div`
  background-color: white;
  width: 2px;
  margin: 0 5px;
`
const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`
const Side = styled.div`
  max-width: 50%;
  padding-right: 5%;
  transition: max-width 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 5%;
  }
`
const appear = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
`
const Appear = styled.div`
  animation: ${appear} 2s ease-in-out forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 10px;
`

export default Home
