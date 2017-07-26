import React from 'react';

export default class InplaceEditable extends React.Component {
    static propTypes = {
        change                  : React.PropTypes.func.isRequired,
        classDisabled           : React.PropTypes.string,
        classEditing            : React.PropTypes.string,
        classInvalid            : React.PropTypes.string,
        classLoading            : React.PropTypes.string,
        className               : React.PropTypes.string,
        isDisabled              : React.PropTypes.bool,
        onMouseOver             : React.PropTypes.func,
        propName                : React.PropTypes.string.isRequired,
        shouldBlockWhileLoading : React.PropTypes.bool,
        validate                : React.PropTypes.func,
        value                   : React.PropTypes.any.isRequired,
    };

    constructor(props){
        super(props);

        if (!this.props.propName) throw 'RTFM: missing \'propName\' prop';
        if (!this.props.change) throw 'RTFM: missing \'change\' prop';
        if (this.props.value == undefined) throw 'RTFM: missing \'value\' prop';

        this.state = {
            editing  : false,
            loading  : false,
            disabled : false,
            invalid  : false
        };
    }

    componentWillReceiveProps = (nextProps) => {
        if ('value' in nextProps) this.setState({loading: false, editing: false, invalid: false, newValue: null});
    };

    commit = (value) => {
        if(!this.state.invalid) {
            let newProp = {};
            newProp[this.props.propName] = value;
            this.setState({loading: true, newValue: value});
            this.props.change(newProp);
        }
    };

    doValidations = (value) => {
        if(this.props.validate) {
            console.log('doing validations from props');
            this.setState({invalid: !this.props.validate(value)});
        } else if (this.validate) {
            console.log('doing default valudations');
            this.setState({invalid: !this.validate(value)});
        }
    };

    handleClick = () => {
        throw 'RIEBase must be subclassed first: use a concrete class like RIEInput, RIEToggle, RIEDate et.c';
    };

    makeClassString = () => {
        var classNames = [];
        if (this.props.className) classNames.push(this.props.className);
        if (this.state.editing  && this.props.classEditing)  classNames.push(this.props.classEditing);
        if (this.state.loading  && this.props.classLoading)  classNames.push(this.props.classLoading);
        if (this.state.disabled && this.props.classDisabled) classNames.push(this.props.classDisabled);
        if (this.state.invalid  && this.props.classInvalid)  classNames.push(this.props.classInvalid);
        return classNames.join(' ');
    };

    selectInputText = (element) => {
        element.setSelectionRange(0, element.value.length);
    };

    render = () => {
        return (
            <span tabIndex="0" className={this.makeClassString()}
                onMouseOver={this.props.onMouseOver}
                onClick={this.handleClick}
            >{this.props.value}</span>
        );
    };

}

export default InplaceEditable;
