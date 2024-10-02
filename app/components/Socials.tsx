import React from 'react'
import TwitterIcon from '../svg/twitter.svg'
import DiscordIcon from '../svg/discord.svg'
import GithubIcon from '../svg/github.svg'
import MediumIcon from '../svg/medium.svg'
import TelegramIcon from '../svg/telegram.svg'
import Image from 'next/image'

const Socials: React.FC = () => {
  return (
    <div className='fixed right-4 bottom-4 p-2 rounded-xl bg-white bg-opacity-40 backdrop-blur-md  w-[250px]'>
      <div className='flex justify-center space-x-2'>
        <a
          href='https://x.com/flxthesixth'
          target='_blank'
          rel='noopener noreferrer'
          className=' mt-[2px] transform transition-transform duration-300  hover:-rotate-12'
        >
          <Image src={TwitterIcon} alt='Twitter' height={40} />
        </a>
        <a
          href='https://t.me/flxthesixth'
          target='_blank'
          rel='noopener noreferrer'
          className=' mt-[2px] transform transition-transform duration-300  hover:-rotate-12'
        >
          <Image src={TelegramIcon} alt='Telegram' height={40} />
        </a>
        <a
          href='https://discord.com/invite/7nhFHA6yZq'
          target='_blank'
          rel='noopener noreferrer'
          className=' transform transition-transform duration-300  hover:-rotate-12'
        >
          <Image src={DiscordIcon} alt='Discord' height={45} />
        </a>
        <a
          href='https://github.com/strayyouth666'
          target='_blank'
          rel='noopener noreferrer'
          className=' mt-[2px] transform transition-transform duration-300  hover:-rotate-12'
        >
          <Image src={GithubIcon} alt='GitHub' height={40} />
        </a>
        <a
          href='https://medium.com/@flxthesixth'
          target='_blank'
          rel='noopener noreferrer'
          className=' mt-[2px] transform transition-transform duration-300  hover:-rotate-12'
        >
          <Image src={MediumIcon} alt='Medium' height={40} />
        </a>
      </div>
    </div>
  )
}

export default Socials
