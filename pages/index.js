import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <img src="/images/cat.jpeg" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3vo2XYsk8scwiiaHc6EJEogs383ymXWB25NwFszMz&s" />
      </main>

      <Footer />
    </div>
  )
}
