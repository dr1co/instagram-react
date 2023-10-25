import { footerIcons } from '../contents/icons'

export default function MobileFooter() {
  return (
    <div className="fundo-mobile">
      {footerIcons.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
    </div>
  )
}

