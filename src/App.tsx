import Banner from "./Components/Banner"
import Nav from "./Components/Nav"


function App() {

const technologyPromise = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

  return (
    <>
    <Nav/>
    <Banner/>
 
    </>
  )
}

export default App
