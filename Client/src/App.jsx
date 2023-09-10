import { GroupCards } from "./components/GroupCards"
import { NavBar } from "./components/NavBar"
import { SerchBar } from "./components/SerchBar"

function App() {

  return (
    <>
      <NavBar/>
      {/* <h1 className="">APP</h1> */}
      <SerchBar/>
      <GroupCards/>
    </>
  )
}

export default App
