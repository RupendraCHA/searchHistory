import './index.css'

const HistoryItem = props => {
  const {item, itemToDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const deleteItemOnClicking = () => {
    itemToDelete(id)
  }
  return (
    <li className="item-container">
      <div className="logo-text-time">
        <span>{timeAccessed}</span>
        <div className="logo-domain">
          <div>
            <img src={logoUrl} className="logo" alt="domain logo" />
          </div>
          <p className="title">{title}</p>
          <p className="domain-name">{domainUrl}</p>
        </div>
      </div>
      <button
        className="delete-icon"
        onClick={deleteItemOnClicking}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
