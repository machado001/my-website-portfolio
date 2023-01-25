//next imports
import Head from 'next/head'
import { Roboto_Mono } from '@next/font/google'
import Link from 'next/link'


//components
import Header from '@/components/Header'
import { Apresentation } from '@/components/Apresentation'
import BottomSection from '@/components/BottomSection'
import { Footer } from '@/components/Footer'

export const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '300' })

export default function Home() {
  return (
    <div style={robotoMono.style} className={` flex h-[100vh] relative flex-col bg-white`}>
      <Head>
        <title>machado001</title>
        <meta name="description" content="A web developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      </Head>
      <Header />
      <div className=" my-auto w-full relative bottom-10 ">
        <Apresentation h1Content='Gabriel Machado' pContent='loremoooooooooooooooo' />
        <BottomSection>
          <ul className='flex justify-center m-5'>
            {
              ['Projects', 'About me'].map((title, index) => (
                <li key={index}>
                  <Link href={title === 'Projects' ? './projects' : 'about-me'}>
                    <button className="border mx-5 border-black p-3 hover:bg-black hover:text-white transition"> {title}
                    </button>
                  </Link>
                </li>
              ))
            }
          </ul>
        </BottomSection>
      </div>
      <Footer />
    </div>
  )
}

