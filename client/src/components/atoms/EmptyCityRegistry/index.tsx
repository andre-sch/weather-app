import "./index.css"

export function EmptyCityRegistry() {
  return (
    <div className="empty-city-registry">
      <strong>No cities registered!</strong>
      <figure>
        <img src="/assets/other/world.png" alt="A person searching for places around the world" />
        <figcaption>Register new cities to follow the weather forecast</figcaption>
      </figure>
    </div>
  )
}
