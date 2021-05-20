import Head from 'next/head'
import Header from './components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook || Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}

      </main>

    </div>
  )
}
