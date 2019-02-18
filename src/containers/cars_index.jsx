import React from "react";
import Car from "../components/car";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchCars } from "../actions";
import { Link } from "react-router-dom";

class CarsIndex extends React.Component {
  // static defaultProps = {
  //   cars: [
  //     {
  //       id: 1,
  //       brand: "Peugeot",
  //       model: "106",
  //       owner: "John",
  //       plate: "WOB-ED-42"
  //     },
  //     {
  //       id: 2,
  //       brand: "Renault",
  //       model: "Scenic",
  //       owner: "Paul",
  //       plate: "AAA-12-BC"
  //     },
  //     {
  //       id: 3,
  //       brand: "Aston Martin",
  //       model: "DB Mark III",
  //       owner: "James",
  //       plate: "418-ED-94"
  //     },
  //     {
  //       id: 4,
  //       brand: "VW",
  //       model: "Beetle",
  //       owner: "George",
  //       plate: "1234-XD-75"
  //     }
  //   ]
  // };

  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    return (
      <div className="cars-container">
        <div className="cars-new-link">
          <Link to="/cars/new" className="btn btn-primary">
            Add Car
          </Link>
        </div>
        <div className="cars-list">
          {this.props.cars.map(car => {
            return (
              <Link to={`/cars/${car.id}`}>
                <Car car={car} key={car.id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars: fetchCars }, dispatch);
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsIndex);
