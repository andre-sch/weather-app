import thickArrow from '../../../assets/other/thick-arrow.svg'

import './index.css'

export function CardsPagination() {
  return (
    <div className="cards-pagination">
      <button className="card-arrow">
        <img
          src={thickArrow}
          alt="See next card"
          style={{transform: 'rotate(180deg)'}} />
      </button>
      <button className="card-arrow">
        <img src={thickArrow} alt="See previous card" />
      </button>

      <div className="list-order">
        <span className="card-position"></span>
        <span className="card-position current"></span>
        <span className="card-position"></span>
        <span className="card-position"></span>
      </div>
    </div>
  )
}
