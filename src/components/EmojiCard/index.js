import './index.css'

const EmojiCard = props => {
  const {eachEmoji, changeScore} = props
  const {emojiUrl, emojiName, id} = eachEmoji

  const scoreChange = () => {
    changeScore(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" onClick={scoreChange} className="emoji-btn">
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
