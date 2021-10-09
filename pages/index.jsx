import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/nav'
import Summary from '../components/summary'
import Deployed from '../components/deployed'
import CTA from '../components/cta'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
margin: auto;
`

export default function Overview() {
  return (
    <Wrapper>
      <NavBar/>
      <Summary/>
      <CTA />
      <Deployed />
    </Wrapper>
  )
}
