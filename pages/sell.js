import Head from 'next/head'
import Image from 'next/image'
import Mission from '../components/mission'
import Vision from '../components/vision'
import styles from '../styles/Home.module.css'
import {Fade} from 'react-awesome-reveal'
import PriceTable from '../components/priceTable'
import Nav from '../components/nav'
import Announcement from '../components/announcement'
import Footer from '../components/footer'
import Intro from '../components/intro'
import PrimaryFunction from '../components/primaryFunction'
import ContactForm from '../components/contactForm'
import Testimonies from '../components/testimonies'


export default function Sell() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Announcement/>

<Nav/>
<Intro/>
   <PrimaryFunction/>
      
      <PriceTable/> 
      
      <ContactForm/>
      <Footer/>

    </div>
  )
}
