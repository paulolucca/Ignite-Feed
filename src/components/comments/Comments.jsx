import { ThumbsUp, Trash } from 'phosphor-react';
import styles from'./Comments.module.css';
import { Avatar } from '../avatar/avatar';



export function Comments() {
  return (
  <div className={styles.comments}>
    <Avatar src="https://github.com/maykbrito.png"
    hasBorder={false}
    />
        <div className={styles.commentsBox}>
            <div className={styles.commentsContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>DIego Fernando</strong>
                            <time dataTime="2022-05-11 08:13:00" title='11 de maio 2022'>
                                Publicado cerca de 1 hora atrás
                            </time>

                    </div>
                    <button title='Deletar comentarios'> 
                    <Trash size={24}/>
                    </button>
                </header>

                <p>Muito bom parabéns!!</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp/>
                        Aplaudir 
                </button>
            </footer>
        </div>
  </div>
  );
}