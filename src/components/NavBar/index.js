import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <nav className="nav-bar-container">
      <div className="nav-img-container">
        <img
          className="nav-bar-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="img-text">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="score-text">Score: {score}</p>
        <p className="score-text">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
