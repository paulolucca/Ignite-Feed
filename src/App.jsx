import React from 'react';
import { Post } from './components/post/Post';

import './global.css';
import styles from './App.module.css';

import { Header } from './components/header/Header';
import { Sidebar} from './components/sidebar/Sidebar';


export function App() {
  return(
    <div>

      <Header/>

        <div className={styles.wrapper}>
          
          <Sidebar/>
              
            <main>

              <Post 
            author='Henrique José'
            content='Lorem Ipsum sdasd dfs al dasd '
            />

              <Post 
            author='José de Abreu'
            content='Lorem Ipsum sadsad sdsad sd ads '
            />
            
            </main>
            
        </div>

      

    </div>
 
 
  
  )
}


