import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return <div style={{ fontSize: 12, color: "red" }}>{error}</div>
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
                {/* <div style={{ fontSize: 12, color: "red" }}>{meta.error}</div> */}
            </div>
            // <input onChange={formProps.input.onChange}
            //     value={formProps.input.value}
            // />
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "Title is Required"
    }

    if (!formValues.description) {
        errors.description = "Description is required"
    }
    return errors
}

export default reduxForm({
    form: "streamForm",
    validate
})(StreamForm);
