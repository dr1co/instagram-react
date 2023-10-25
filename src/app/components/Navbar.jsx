import { navbarIcons } from "../contents/icons"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <DesktopLogo />
        <MobileLogo />
        <MobileInstagram />
        <SearchBar />
        <DesktopIcons />
        <MobileIcons />
      </div>
    </div>
  )
}

function DesktopLogo() {
  return (
    <div className="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div className="separador"></div>
      <img src="assets/img/logo.png" alt="Logo do Instagram" />
    </div>
  )
}

function MobileLogo() {
  return (
    <div className="logo-mobile">
      <ion-icon name="logo-instagram"></ion-icon>
    </div>
  )
}

function MobileInstagram() {
  return (
    <div className="instagram-mobile">
      <img src="assets/img/logo.png" alt="Logo do Instagram" />
    </div>
  )
}

function SearchBar() {
  return (
    <div className="pesquisa">
      <input type="text" placeholder="Pesquisar" />
    </div>
  )
}

function DesktopIcons() {
  return (
    <div className="icones">
      {navbarIcons.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
    </div>
  )
}

function MobileIcons() {
  return (
    <div className="icones-mobile">
      <ion-icon name={navbarIcons[0]}></ion-icon>
    </div>
  )
}