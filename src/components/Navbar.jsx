import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav>
        <img src={logo} alt="title logo" className='nav-logo'/>
        <p className='nav--text'>my travel journal.</p>
    </nav>
  )
}
