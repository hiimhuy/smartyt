'use client'

import {BsYoutube,BsGithub,BsLinkedin,BsFacebook, BsReddit} from 'react-icons/bs'
import payment from '@/images/payment.png'
import  Container  from './Container'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full bg-darkText text-slate-100'>
        <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='flex flex-col gap-y-4'>
                <Logo/>
                <div className='flex item-center gap-x-4'>
                    <a href="https://www.youtube.com/" target='_blank'>
                    <span className='socicalLink'>
                        <BsYoutube/>
                    </span>
                    </a>
                    <a href="https://www.github.com/" target='_blank'>
                    <span className='socicalLink'>
                        <BsGithub/>
                    </span>
                    </a>
                    <a href="https://www.linkedin.com/" target='_blank'>
                    <span className='socicalLink'>
                        <BsLinkedin/>
                    </span>
                    </a>
                    <a href="https://www.facebook.com/" target='_blank'>
                    <span className='socicalLink'>
                        <BsFacebook/>
                    </span>
                    </a>
                    <a href="https://www.reddit.com/" target='_blank'>
                    <span className='socicalLink'>
                        <BsReddit/>
                    </span>
                    </a>
                </div>
            </div>
            <div>
                <p className='text-lg'>Latest posts </p>
                <ul className='text-sm font-light mt02 flex flex-col gap-y-2 '>
                    <li className='flex flex-col'>
                        <Link href={'/'} className='text-white hover:text-orange-600 cursor-pointer duration-200'>
                            Where Music Is Headed Next
                        </Link>
                        <span className='text-orange-600'>
                            January 31, 2022
                        </span>
                    </li>
                    <li className='flex flex-col'>
                        <Link href={'/'} className='text-white hover:text-orange-600 cursor-pointer duration-200'>
                            Sports Brand New Advertising Campaign
                        </Link>
                        <span className='text-orange-600'>
                            January 31, 2022
                        </span>
                    </li>
                    <li className='flex flex-col'>
                        <Link href={'/'} className='text-white hover:text-orange-600 cursor-pointer duration-200'>
                            Snippets From The Tech Mobile Conference
                        </Link>
                        <span className='text-orange-600'>
                            January 31, 2022
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <p className='text-lg'>Links</p>
                <ul className='text-base font-medium mt-2 flex flex-col gap-y-2'>
                    <Link href={'/'} className='hover:text-orange-500 cursor-pointer duration-200'>Home</Link>
                    <Link href={'/'} className='hover:text-orange-500 cursor-pointer duration-200'>Cart</Link>
                    <Link href={'/'} className='hover:text-orange-500 cursor-pointer duration-200'>About</Link>
                    <Link href={'/'} className='hover:text-orange-500 cursor-pointer duration-200'>Newsletter</Link>
                    <Link href={'/'} className='hover:text-orange-500 cursor-pointer duration-200'>Contact</Link>

                </ul>
            </div>
            <div>
                <p className='text-xl mb-2'>Pay us with your trusted services</p>
                <Image src={payment} alt='payment banner image' className='w-full h-10 object-cover' /> 
            </div>
        </Container>
    </div>
  )
}

export default Footer