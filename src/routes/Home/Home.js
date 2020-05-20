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
    </Fragment>
  )
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
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
`

export default Home
