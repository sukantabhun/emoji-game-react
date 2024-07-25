import './index.css'

const NavBar = props => {
  const {score, topScore, isWon} = props
  return (
    <nav className="nav-element">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="name-element">Emoji Game</h1>
      </div>
      {!isWon ? (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
