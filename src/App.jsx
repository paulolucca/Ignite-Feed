import viteLogo from '/vite.svg';
import React from 'react';
import { Post } from './assets/post/Post';

import './global.css';
import { styles } from './app.module.css';
import { Header } from './components/header/Header';


export function App() {
  return(
    <div>

      <Header/>

      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>

          <Post 
        author='Henrique José'
         content='Lorem Ipsum sdasd dfs al dasd '
        />

        <Post 
        author='Jose de Abre'
        content='Lorem Ipsum sadsad sdsad sd ads '
        />
        </main>
      </div>

      

    </div>
 
 
  
  )
}


