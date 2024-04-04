
import { useState } from 'react'
import confetti from "canvas-confetti"
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constans'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { saveGame } from './logic/storage'

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x
  })
  // null nohay ganador, false hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
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

    // Guardar partida
    saveGame({
      board: newBoard,
      turn: newTurn
    })

    // Revisa si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tres en Raya</h1>
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
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>

  )
}

export default App
