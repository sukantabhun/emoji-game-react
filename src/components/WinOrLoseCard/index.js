import './index.css'

const WinOrLoseCard = props => {
  const {isWon, isLost, onClickPlayAgain, score} = props
  const onClickBtn = () => {
    onClickPlayAgain()
  }
  let imgUrl
  if (isWon === true) {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  }
  if (isLost === true) {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }
  return (
    <div className="element-container">
      <img src={imgUrl} alt="win or lose" className="image" />
      <div className="internal-container">
        <h1 className="heading">{isLost ? 'You Lose' : 'You Won'}</h1>
        <p className="your-score-status">
          {isLost && !isWon ? 'Score' : 'Best Score'}
        </p>
        <p className="your-score">{score}/12</p>
        <button type="button" className="button" onClick={onClickBtn}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
