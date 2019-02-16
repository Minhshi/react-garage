import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { addCar } from "../actions";

class CarsNew extends React.Component {
  onSubmit = values => {
    this.props.addCar(this.props.garage, values, car => {
      this.props.history.push("/");
      return car;
    });
  };

  render() {
    return (
      <div className="form-container">
        <div className="form">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div>
              <label htmlFor="brand">Brand</label>
              <Field name="brand" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="model">Model</label>
              <Field name="model" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="owner">Owner</label>
              <Field name="owner" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="plate">Plate</label>
              <Field name="plate" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="cars-index-link">
          <Link to="/">Back</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: "addCarForm" })(
  connect(
    mapStateToProps,
    { addCar }
  )(CarsNew)
);
