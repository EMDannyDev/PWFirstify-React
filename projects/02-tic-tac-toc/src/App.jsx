
import './App.css'

const TURNS = {
  x: 'x',
  o: 'o'
}

const board = Array(9).fill(null)

const Square = ({ children, updateBoard, index }) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}
function App() {
  return (
    <main className='board'>
      <h1>Tic Tac Toc</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
              >
                {index}
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App