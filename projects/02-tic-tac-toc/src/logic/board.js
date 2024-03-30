import { WINNER_COMBOS } from "../constans"

export const checkWinnerFrom = (checkBoard) => {
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
export const checkEndGame = (newBoard) => {
    // Revisa si hay un empate
    // Si no hay mas espacios vacios
    return newBoard.every((square) => square != null)
}