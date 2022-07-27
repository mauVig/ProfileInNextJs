import {
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandGithub,
} from 'react-icons/tb';

const navigation = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/maurovigliero/',
    icon: TbBrandLinkedin,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/maurook789/',
    icon: TbBrandInstagram,
  },
  {
    name: 'Github',
    href: 'https://github.com/mauVig',
    icon: TbBrandGithub,
  },
];

export default function Footer({ len }) {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-black-600 text-gray-500'>
      <div className='max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <div className=' flex justify-center space-x-6'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              rel='noreferrer'
              target='_blank'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-sm'>
          &copy; {year} Mauro Daniel Vigliero |{' '}
          {len ? 'Derechos reservados' : 'All rights reserved'}
        </p>
      </div>
    </footer>
  );
}
