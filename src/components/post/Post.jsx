import { Comments } from '../comments/Comments';
import { Avatar } from '../avatar/Avatar';
import styles from './Post.module.css';

export function Post() {
  return (

    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <Avatar src="https://github.com/diego3g.png"/>

          <div className={styles.authorInfo}>
              <strong>Paulo Cesar </strong>
              <span>Web Developer </span>
          </div>
        </div>

        <time dataTime="2022-05-11 08:13:00" title='11 de maio 2022'>
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <a href="">
          Desenvolvedor Web 
          </a>
        </p>

        <p>
        <a href="">
          Desenvolvedor React
          </a>
        </p>

        <p>
        <a href="">
          Desenvolvedor Junior
          </a>
        </p>
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

