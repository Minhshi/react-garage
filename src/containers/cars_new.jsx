import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { addCar } from "../actions";

const required = value => value ? undefined : 'Required'
const upper = value =>
  value && !/^[A-Z0-9]+-[0-9]+-[0-9]{2}$/.test(value) ?
  'Invalid plate number! e.g. MINI-19-87' : undefined

class CarsNew extends React.Component {
  onSubmit = values => {
    this.props.addCar(this.props.garage, values, car => {
      this.props.history.push("/");
      return car;
    });
  };

  renderField(field){
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <input type="text" {...field.input} className="form-control"/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

  render() {

    return (
      <div className="form-container">
        <div className="form">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div>
              <label htmlFor="brand">Brand</label>
              <Field
                name="brand"
                label="Brand"
                type="text"
                component={this.renderField}
                validate={required}
              />
            </div>
            <div>
              <label htmlFor="model">Model</label>
              <Field
                name="model"
                label="Model"
                component={this.renderField}
                type="text"
                validate={required}
              />
            </div>
            <div>
              <label htmlFor="owner">Owner</label>
              <Field
                name="owner"
                label="Owner"
                component={this.renderField}
                type="text"
                validate={required}
              />
            </div>
            <div>
              <label htmlFor="plate">Plate</label>
              <Field
              name="plate"
              label="Plate"
              component={this.renderField}
              type="text"
              validate={[required, upper]}
              />
            </div>
            <button
              type="submit"
              disabled={this.props.invalid || this.props.pristine || this.props.submitting} >Submit</button>
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
