import { PencilLine } from 'phosphor-react';

import styles from './sidebar.module.css';
import { Avatar } from '../avatar/avatar';

//author :{avatar_url: "", name :"" , role: "", }
//publisheaAt: Date
//contente: String

export function Sidebar() {

  return (

    <aside clasName={styles.sidebar}>
      <img className={styles.cover} 
      src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />

      <div className={styles.profile}>

        <Avatar src="https://github.com/paulolucca.png"/>

        <strong> Paulo Cesar</strong>

        <span> Web Developer</span>

      </div>

      <footer className={styles.footer}>

        

          <a href="#" className={styles.footerA}> 
          <PencilLine 
          size={20}/>
          Editar seu Perfil
           </a>
           
      </footer>

    </aside>

  );
}