import { storiesInfos } from "../contents/infos"

export default function Stories() {
  return (
    <div className="stories">
      {storiesInfos.map((story, index) => <Story key={index} pfp={story.userPfp} username={story.userName} />)}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.pfp} alt={props.username} />
      </div>
      <div className="usuario">
        {props.username}
      </div>
    </div>
  )
}