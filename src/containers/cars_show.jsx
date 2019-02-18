import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCar } from "../actions";
import { deleteCar } from "../actions";

class CarsShow extends React.Component {
  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
  };

  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }
  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div className="car-container">
        <div className="car-brand">
          <h4>{this.props.car.brand}</h4>
        </div>
        <div className="car-model">{this.props.car.model}</div>
        <div className="car-owner">{this.props.car.owner}</div>
        <div className="car-plate">{this.props.car.plate}</div>
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Delete
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsShow);
