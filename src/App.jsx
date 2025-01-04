import { useEffect, useState } from "react";
import Header from "./components/Header"
import Pokedex from "./components/Pokedex";
import Loading from "./components/Loading";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
        setIsLoading(false)
    }, 5000);

  }, [isLoading])

  return (
      <div>
        {isLoading ? <Loading/> :
          <>
          <Header/>
          <Pokedex/>
          </>
        }
      </div>
  );
}

export default App