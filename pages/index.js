import Head from "next/head"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Advantages from "../components/advantages"
import About from "../components/about"

export default function initialPage() {
  return (
    <div>
      <Head>
      </Head>
      <Navbar/>
      <Header/>
      <main>
        <Advantages/>
        <About/>
      </main>
    </div>
  )
}