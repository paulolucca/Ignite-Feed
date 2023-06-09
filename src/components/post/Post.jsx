import { Comments } from '../comments/Comments';
import { Avatar } from '../avatar/avatar';
import styles from './Post.module.css';

import {format, formatDistanceToNow} from 'date-fns';
import ptBr from'date-fns/locale/pt-BR';

export function Post({author, publishedAt, content }) {

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBr,
  } )

  const publisheDateRelativeeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })


  return (

    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <Avatar src={author.avatarUrl}/>

          <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
          </div>
        </div>

        <time dataTime={publishedDateFormatted} title={publishedAt.toISOString()}>
          {publisheDateRelativeeToNow}
          
        </time>
      </header>

      <div className={styles.content}>
            {content.map(line =>{
              if(line.type === 'paragraph'){
                return <p>{line.content} </p>;
              } else if (line.type === 'link'){
                return <p> <a href=""> {line.content} </a></p>;
              }
            })}
          <a href="">
          Desenvolvedor Web 
          </a>
        

      
        <a href="">
          Desenvolvedor React
          </a>
        

        
        <a href="">
          Desenvolvedor Junior
          </a>
        
      </div>

      <form className={styles.commemtForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        placeholder='Deixe um comentário'
        />

        <footer>
          <button 
          type='submit'>  Publicar </button>
        </footer>
      </form>
      <div className={styles.commentsList}>
        <Comments/>
        <Comments/>
        <Comments/>
      </div>
    </article>

  );
}

