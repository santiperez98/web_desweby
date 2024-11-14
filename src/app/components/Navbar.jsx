import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 bg-dark text-light p-4 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Desweby</h1>
        <nav className={`flex space-x-6 ${menuOpen ? 'block' : 'hidden'} sm:flex`}>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:text-aqua">Servicios</a></li>
            <li><a href="#portfolio" className="hover:text-aqua">Portafolio</a></li>
            <li><a href="#contact" className="hover:text-aqua">Contacto</a></li>
          </ul>
        </nav>
        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-light">☰</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
