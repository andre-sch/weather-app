import "./index.css"

export function CurrentInfo() {
  return (
    <div className="current-info">
      <strong>21º</strong>
      <div className="card-location">Maringa,<span>Brazil</span></div>
      <div className="min-max vertical">
        <span>24º</span>
        <span>18º</span>
      </div>
      <h1>Few<br/>Clouds</h1>
      <img
        src="/assets/weather/images/day/few-clouds.png"
        alt="The sun under a cloud"
        draggable={false} />
    </div>
  )
}
