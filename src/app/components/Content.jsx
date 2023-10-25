import Stories from './Stories';
import Posts from './Posts';
import { userInfos, suggestionsInfos } from '../contents/infos';

export default function Content() {
  return (
    <div className="corpo">
      <LeftContent />
      <Sidebar />
    </div>
  )
}

function LeftContent() {
  return (
    <div className="esquerda">
      <Stories />
      <Posts />
    </div>
  )
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="usuario">
        <img src={userInfos.image} alt={userInfos.name} />
        <div className="texto">
          <strong>{userInfos.username}</strong>
          {userInfos.name}
        </div>
      </div>

      <Suggestions />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  )
}

function Suggestions() {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestionsInfos.map((suggestion, index) => <Suggestion key={index} pfp={suggestion.userPfp} name={suggestion.userName} reason={suggestion.reason} />)}
    </div>
  )
}

function Suggestion(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.pfp} alt={props.name} />
        <div className="texto">
          <div className="nome">{props.name}</div>
          <div className="razao">{props.reason}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  )
}