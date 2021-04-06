import React from 'react';
import { Field, reduxForm } from 'redux-form';

// this class has a TON of props which are being passed in by reduxForm
class StreamForm extends React.Component {

  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      )
    }
  }

  renderInput= (formProps) => {
    const className = `field ${formProps.meta.error && formProps.meta.touched? 'error' : ''}`
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input } autoComplete="off" />
        {/* meta contains functions like touched */}
        {this.renderError(formProps.meta)}
      </div>
     )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() { 
    return (
      // it has error class name for semantic ui to show errors
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        {/* the component should be an input, and it gets called with some props through Field */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }

}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'Please enter a title';
  }

  if (!formValues.description) {
    errors.description = 'Please enter a description'
  }

  return errors;
};

// reduxForm works similarly to Connect, it only receives one object
export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm);
