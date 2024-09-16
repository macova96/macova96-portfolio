import Link from 'next/link';

const Header = () => {
  return (
    <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
      {/* Cambié "classname" a "className", ya que React utiliza "className" en lugar de "class" */}
      <nav className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Cambié "classname" a "className" para React */}
          <h1 className="text-2xl">Macova96</h1>
        </div>
        <div id="hs-navbar-cover-page" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-cover-page-collapse">
          {/* Aquí también cambié "classname" a "className" */}
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            {/* Para los enlaces, cambié "classname" a "className" */}
            <a className="font-medium text-white/70 hover:text-accent focus:outline-none focus:text-secondary" href="/about">About</a>
            <a className="font-medium text-white/70 hover:text-accent focus:outline-none focus:text-secondary" href="/projects">Projects</a>
            <a className="font-medium text-white/70 hover:text-accent focus:outline-none focus:text-secondary" href="/contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
