import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "./leslie-pic.png",
      name: "Leslie Alexander",
      role: "UI Designer",
    },

    content: [
      { type: "paragraph", content: "Hey everyone 👋" },
      {
        type: "paragraph",
        content:
          "I just uploaded a new project to my portfolio. It's a project I worked on during the NLW Return event by Rocketseat. The project's name is DoctorCare 🚀.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-13 20:44:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Sidebar />
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
