
import { useState } from 'react'
import './App.css'

const TURNS = {
  x: 'x',
  o: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.x)

  // null nohay ganador, false hay un empate
  const [winner, setWinner] = useState(null)

  const checkWinner = (checkBoard) => {
    // Revision de combinaciones para ver al ganador
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        checkBoard[a] &&
        checkBoard[a] == checkBoard[b] &&
        checkBoard[a] == checkBoard[c]
      ) {
        return checkBoard[a]
      }
    }
    // Si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    // Revisa si hay un empate
    // Si no hay mas espacios vacios
    return newBoard.every((square) => square != null)
  }

  const updateBoard = (index) => {
    // No se actualiza esta poscion si ya tiene algo
    // o si ya se tiene un ganador 
    if (board[index] || winner) return
    // Actualiza el trablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambia el turno
    const newTurn = turn == TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    // Revisa si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toc</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn == TURNS.o}>
          {TURNS.o}
        </Square>
      </section>

      {
        winner != null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner == false
                    ? 'Empate'
                    : 'Ganó'
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>

            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
