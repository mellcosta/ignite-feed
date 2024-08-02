import { Header } from "./components/Header"
import { Profile } from "./components/Profile"

import './global.css'
import styles from './App.module.css'

function App(){
  return (
    <>
      <Header/>
      <main className={styles.container}>
      <Profile/>

      </main>
    </>
  )
}

export default App
