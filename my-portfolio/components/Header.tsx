import Link from 'next/link'

const Header = () => {
    return (
        <header className=' relative border-b-black border '>
            <ul className='flex justify-between ite p-6'>
                <li>
                    <Link href='/'>machado001</Link>
                </li>
                <li className='flex justify-between sm:w-20'>
                    <span className="material-symbols-outlined">
                        dark_mode
                    </span>
                    <i className="em em-flag-br" aria-role="presentation" aria-label="Brazil Flag"></i>
                </li>
            </ul>
        </header >
    )
}

export default Header


