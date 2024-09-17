import { Header } from "./components/Header"
import { Profile } from "./components/Profile"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'

function App(){
  return (
    <>
      <Header/>
      <main className={styles.container}>
      <Profile/>
      <div>
        <Post />
      </div>
      </main>
    </>
  )
}

export default App
