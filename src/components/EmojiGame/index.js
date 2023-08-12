import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'

/* 
const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import WinOrLoseCard from '../WinOrLoseCard'

// Write your code here.

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      score: 0,
      topScore: 0,
      emojisList,
      selectedEmojiList: [],
      showWinorLooseCArd: false,
    }
  }

  playAgain = () => {
    this.setState({showWinorLooseCArd: false, score: 0, selectedEmojiList: []})
  }

  showYouLoose = () => {
    this.setState({showWinorLooseCArd: true})
  }

  changeScore = id => {
    const {emojisList, selectedEmojiList, score, topScore} = this.state
    console.log('hi')
    const filterIdlistItems = selectedEmojiList.filter(each => each !== id)
    const isPresent = selectedEmojiList.length !== filterIdlistItems.length // checking selected list
    if (isPresent) {
      console.log('hello')
      this.showYouLoose()
    } else {
      this.setState(previousState => ({
        selectedEmojiList: [...previousState.selectedEmojiList, id],
      }))
      const shuffleList = emojisList.sort(() => Math.random() - 0.5)
      const upDateScore = score + 1
      console.log('hi2')
      if (upDateScore === 12) {
        this.showYouLoose()
      }
      if (upDateScore >= topScore) {
        this.setState({topScore: upDateScore, score: upDateScore})
      }
      this.setState({emojisList: shuffleList, score: upDateScore})
    }
  }

  render() {
    const {
      score,
      topScore,
      emojisList,
      selectedEmojiList,
      showWinorLooseCArd,
    } = this.state
    console.log(selectedEmojiList)
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} />
        <div className="emojis-container">
          {showWinorLooseCArd ? (
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          ) : (
            <ul className="list-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  changeScore={this.changeScore}
                  eachEmoji={eachEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
