import { Button } from "./components/Button"
import { Post } from "./components/Post"

function App(){
  return (
    <>
    <Button/>
    <p>HI</p>
    <Post 
      author="Melissa Costa"
      content="This is the content"/> 
    <Post 
      author="Joa Roque"
      content="This is the content"/> 
    </>
  )
}

export default App
