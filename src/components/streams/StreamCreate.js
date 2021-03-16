import React from 'react';
import { Field, reduxForm } from 'redux-form';

// this class has a TON of props which are being passed in by reduxForm
class StreamCreate extends React.Component {

  renderInput(formProps) {
    // <input
    //   onChange={formProps.input.onChange}
    //   value={formProps.input.value}
    // />
    // we can shorten the above into below
    return (
      <input {...formProps.input } />
     )
  }

  render() { 
    return (
      <form>
        {/* the component should be an input, and it gets called with some props through Field */}
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    )
  }
}

// reduxForm works similarly to Connect, it only receives one object
export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);