import './index.css'

const SearchItems = props => {
  const {BrowserDetails, onDeleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = BrowserDetails
  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="list-Items">
        <p className="timeAccessed">{timeAccessed}</p>
        <img className="logoUrl" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <div className="buttonContainer">
        <button testid="delete" className="button" onClick={onDelete}>
          <img
            className="deleteimg"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          />
        </button>
      </div>
    </li>
  )
}

export default SearchItems
