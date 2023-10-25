import React from 'react';
import { postsInfos } from '../contents/infos';
export default function Posts() {
  return (
    <div className="posts">
      {postsInfos.map((post, index) =>
        <div key={index} className="post">
          <PostTop pfp={post.originalPosterPfp} username={post.originalPosterUserName} />
          <PostContent image={post.postImage} pfp={post.postLikePfp} username={post.postLikeUserName} counter={post.postLikeCount} />
        </div>
      )}
    </div>
  )
}

function PostTop({pfp, username}) {
  return (
    <div className="topo">
      <div className="usuario">
        <img src={pfp} alt={username} />
        {username}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  )
}

function PostContent({image, pfp, username, counter}) {
  const [like, setLike] = React.useState('heart-outline');

  function toggleLike(el) {
    if (like === 'heart-outline') {
      setLike('heart');
      el.target.classList.add("like");
    } else {
      setLike('heart-outline');
      el.target.classList.remove("like");
    }
  }

  return (
    <div className="fundo">
      <div className="conteudo">
        <img src={image} alt="conteúdo do post" />
      </div>

      <div className="acoes">
        <div>
          <ion-icon name={like} onClick={(el) => toggleLike(el)}></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div className="curtidas">
        <img src={pfp} alt={username} />
        <div className="texto">
          Curtido por <strong>{username}</strong> e <strong>outras {counter} pessoas</strong>
        </div>
      </div>
    </div>
  )
}