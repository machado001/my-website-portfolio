//next imports
import Head from 'next/head'
import { Roboto_Mono } from '@next/font/google'
import Link from 'next/link'
//components
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Apresentation } from '@/components/Apresentation'
import BottomSection from '@/components/BottomSection'
import SvgImage from '@/components/SvgImage'


export const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '300' })

export default function Home() {
    return (
        <div style={robotoMono.style} className={`flex h-[100vh] relative flex-col bg-white`}>
            <Head>
                <title>Projects</title>
                <meta name="description" content="A web developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,0" />
            </Head>
            <Header />
            <Apresentation h1Content='My projects' pContent='See What i have building lately.' />
            <BottomSection>
                <ul className='flex flex-col items-center justify-center m-5'>
                    {
                        ['Math.quiz()', 'capture-page', 'Memory Game'].map((title, index) => (
                            <li key={index}>
                                <Link href={title === title[index] ? title[index] : {}}>
                                    <button className="btn animate-bg flex p-3 m-2  "> {title}
                                        <span className="material-symbols-outlined ">
                                            arrow_right_alt

                                        </span>
                                    </button>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </BottomSection>
            <Footer />
        </div>
    )
}
