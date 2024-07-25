import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedList: [], isLost: false, isWon: false}

  emojiClicked = id => {
    const {clickedList, score, topScore} = this.state
    let max
    if (score > topScore) {
      max = score
    } else {
      max = topScore
    }

    if (clickedList.includes(id)) {
      this.setState(prevState => ({
        isLost: !prevState.isLost,
        topScore: max,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedList: [...clickedList, id],
      }))
      if (score === 11 || score === 12) {
        this.setState(prevState => ({isWon: !prevState.isWon, topScore: 12}))
      }
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickPlayAgain = () => {
    this.setState({score: 0, clickedList: [], isLost: false, isWon: false})
  }

  render() {
    const {score, topScore, isLost, isWon} = this.state
    const emojiList = this.shuffledEmojisList()
    return (
      <div className="background-container">
        <NavBar
          score={score}
          topScore={topScore}
          isLost={isLost}
          isWon={isWon}
        />
        {isLost || isWon ? (
          <div className="win-lose-container">
            <WinOrLoseCard
              isWon={isWon}
              isLost={isLost}
              onClickPlayAgain={this.onClickPlayAgain}
              score={score}
            />
          </div>
        ) : (
          <ul type="none">
            {emojiList.map(eachItem => (
              <EmojiCard
                key={eachItem.id}
                details={eachItem}
                onClickEmoji={this.emojiClicked}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
