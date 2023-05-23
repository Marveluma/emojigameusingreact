import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const isWin = parseInt(score) === 12

  const againPlay = () => {
    playAgain()
  }

  return (
    <div className="winorloose-container">
      {isWin ? (
        <div className="win-container">
          <div className="">
            <h1 className="win-heading">You Won</h1>
            <p className="win-text">Best Score</p>
            <p className="score">12/12</p>
            <button
              type="button"
              onClick={againPlay}
              className="play-again-btn"
            >
              Play Again
            </button>
          </div>
          <img
            className="winorlose-Img"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        </div>
      ) : (
        <div className="win-container">
          <div className="win-text">
            <h1 className="win-heading">You Lose</h1>
            <p className="win-text">Score</p>
            <p className="score">{score}/12</p>
            <button
              type="button"
              onClick={againPlay}
              className="play-again-btn"
            >
              Play Again
            </button>
          </div>
          <img
            className="winorlose-Img"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        </div>
      )}
    </div>
  )
}
export default WinOrLoseCard
