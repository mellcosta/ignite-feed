import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Sidebar />
        <div>
          <Post />
        </div>
      </main>
    </>
  );
}

export default App;
