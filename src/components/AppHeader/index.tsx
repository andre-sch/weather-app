import cardsList from '../../assets/other/cards-list.svg'

import './index.css'

export function AppHeader() {
  return (
    <div className="app-header">
      <button>
        <img src={cardsList} alt="Open cards menu" />
      </button>
      <h1>Weather <span>App</span></h1>
    </div>
  )
}
