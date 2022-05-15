import Head from "next/head"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Advantages from "../components/advantages"
import About from "../components/about"
import Team from "../components/team"

export default function initialPage() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
            <Navbar />
            <Header />
            <main>
              <Advantages />
              <About />
              <Team />
            </main>
          </div>
          )
}