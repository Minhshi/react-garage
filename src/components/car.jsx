import React from "react"

class Car extends React.Component {
  render() {
    return (
      <div className="car-container">
      {this.props.car.brand}
      </div>
    )
  }
}

export default Car
