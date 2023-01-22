import "./index.css"

export function CityInput() {
  return (
    <div className="city-input-container">
      <input type="text" placeholder="Add a new city"/>
      <img src="/assets/other/add-city.svg" alt="" draggable={false} />
    </div>
  )
}
