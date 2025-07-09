import ppLogo from '/pplogo.png'
import PuzzlePanel from './PuzzlePanel.jsx'
import './App.css'

function App() {
  return (
    <>
      <img src={ppLogo} style={{width: '30%'}}/>
      <PuzzlePanel />
      <p>ルール説明は<a href='https://github.com/itsujiht/puzzlePanel' target='_blank'>ここ</a>から</p>
    </>
  )
}

export default App
