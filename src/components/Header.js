import Link from 'next/link';

const Header = () => {
  return (
  <header className='bg-primary p-4 text-accent'>
    <div className='container mx-auto flex justify-between items-center'>
      <h1 className='text-2xl text-secondary font-bold'>
        <Link href="/" > Macova96 </Link>
      </h1>
      <nav>
        <ul className='flex space-x-4'>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Project</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;
