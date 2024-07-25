import './index.css'

const EmojiCard = props => {
  const {details, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = details

  const onClickListItem = () => {
    onClickEmoji(id)
  }

  return (
    <li onClick={onClickListItem} className="emoji-card">
      <button className="elements" type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
