import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const activeClass = isActive ? 'active-tab' : ''

  return (
    <li className="tab-items">
      <button
        type="button"
        className={`tab-btn ${activeClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
