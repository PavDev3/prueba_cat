import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'


function App() {

  const { fact, refreshFact } = useCatFact()
  const {imageUrl} = useCatImage({fact})

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Meme cats</h1>
      
      <button onClick={handleClick}>Refresh Fact</button>

      {fact &&<p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first rhee words for ${fact}`} />}
    </main>
  )
}

export default App
