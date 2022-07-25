import { VscArrowSmallRight } from "react-icons/vsc";

export default function LinksToPages({links}) {
  return (
    <>
      <div className='flex gap-6 mt-6 flex-wrap'>
        {links.map((link) => (
          <a
            href={link.href}
            className='text-skin-500 font-bold tracking-wider mr-8 flex items-center hover:text-skin-700 transition-all duration-100 relative'
            rel='noreferrer'
            target='_blank'
            key={link.name}
          >
            <VscArrowSmallRight className='text-xl absolute right-full top-1' />
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
}
