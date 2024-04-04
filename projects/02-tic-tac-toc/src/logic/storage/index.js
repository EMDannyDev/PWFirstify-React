export const saveGame = ({ board, turn }) => {
    // Guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}
