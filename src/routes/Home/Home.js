import React, { Fragment, useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import Text from 'components/Text'
import Link from 'components/Link'

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
  const [lang, setLang] = useState('br')
  return (
    <Fragment>
      <Translations>
        <TextButton color='white' fontFamily='Helvetica' onClick={() => setLang('br')}>
          BR
        </TextButton>
        <Divider />
        <TextButton color='white' fontFamily='Helvetica' onClick={() => setLang('en')}>
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

      <ContainerText align='flex-end'>
        <Side>{translations[lang].about}</Side>
      </ContainerText>

      <ContainerText align='center'>
        {translations[lang].contact}
        <div style={{ display: 'flex', marginTop: 10 }}>
          <NaveLink
            variant='external'
            href='https://github.com/eduardobittencourt'
            target='_blank'
            color='white'
            textDecoration='none'
            fontFamily='Helvetica'
            fontSize='24px'
            textAlign='center'
          >
            Github
          </NaveLink>
          <Text color='white' fontFamily='Helvetica' fontSize='24px' textAlign='right' margin='0 10px'>
            -
          </Text>
          <NaveLink
            variant='external'
            href='https://www.linkedin.com/in/eduardobittencourt08/'
            target='_blank'
            color='white'
            textDecoration='none'
            fontFamily='Helvetica'
            fontSize='24px'
            textAlign='center'
          >
            LinkedIn
          </NaveLink>
          <Text color='white' fontFamily='Helvetica' fontSize='24px' textAlign='right' margin='0 10px'>
            -
          </Text>
          <NaveLink
            variant='external'
            href='https://twitter.com/ed_bittencourt'
            target='_blank'
            color='white'
            textDecoration='none'
            fontFamily='Helvetica'
            fontSize='24px'
            textAlign='center'
          >
            Twitter
          </NaveLink>
        </div>
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
  transition: color 0.2s ease-in-out;
  &:hover {
    color: purple;
  }
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
  align-items: ${({ align }) => (align ? align : 'flex-start')};
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
const NaveLink = styled(Link)`
  transition: color 0.2s ease-in-out;
  &:hover {
    color: purple;
  }
`

const translations = {
  br: {
    about: (
      <Text color='white' fontFamily='Helvetica' fontSize='24px' textAlign='right'>
        Front-end developer na{' '}
        <NaveLink
          variant='external'
          href='https://nave.rs'
          target='_blank'
          color='white'
          textDecoration='none'
          fontFamily='Helvetica'
        >
          Nave.rs
        </NaveLink>
        , entusiasta do mundo JS e React e residente de Pelotas, RS.
      </Text>
    ),
    contact: (
      <Text color='white' fontFamily='Helvetica' fontSize='24px' textAlign='center' width='50%'>
        Entre em contato
      </Text>
    )
  },
  en: {
    about: (
      <Text color='white' fontFamily='Helvetica' fontSize='24px' textAlign='right'>
        Front-end developer at{' '}
        <NaveLink
          variant='external'
          href='https://nave.rs'
          target='_blank'
          color='white'
          textDecoration='none'
          fontFamily='Helvetica'
        >
          Nave.rs
        </NaveLink>
        , enthusiast from the JS and React world and resident of Pelotas, RS.
      </Text>
    ),
    contact: (
      <Text color='white' fontFamily='Helvetica' fontSize='24px' textAlign='center' width='50%'>
        Get in touch
      </Text>
    )
  }
}

export default Home
