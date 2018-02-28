// @flow
import * as React from 'react';
import styles from './PrettyInput.css';

export type Props = {
  className?: string,
  placeholder: string,
  name: string,
  rightAddon?: React.Node,
  extraAddon?: React.Node,
  autoFocus?: boolean,
  disabled?: boolean,
  error?: boolean,
  value: ?string | ?number,
  autoComplete?: string,
  onChange?: Function,
  onBlur?: Function,
  onFocus?: Function,
  onClick?: Function,
  handleKeyPress?: Function,
  readOnly?: boolean,
  type?: string
};

class PrettyInput extends React.Component<Props, State> {
  state = {
    focus: false,
  };
  componentDidMount() {
    if (this.props.autoFocus) {
      setTimeout(() => {
        // не трогать, а то поповер прыгает
        this.input.selectionStart = this.input.value.length;
        this.input.focus();
      }, 100);
    }
  }

  onFocus = (e) => {
    if (!this.props.readOnly) {
      this.setState({
        focus: true,
      });
    }

    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(e);
    }
  };
  onBlur = (e) => {
    this.setState({
      focus: false,
    });
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(e);
    }
  };
  getInputWrapperClassName() {
    const { disabled, error, readOnly } = this.props;
    let className = styles.inputWrapper;
    if (disabled) {
      className = styles.inputWrapperDisabled;
    }
    if (error) {
      className = styles.errorInputWrapper;
    }
    if (readOnly) {
      className = `${className} ${styles.inputWrapperReadOnly}`;
    }
    return className;
  }
  focus = () => this.input.focus();
  input = null;

  render() {
    const {
      className = '',
      placeholder = '',
      rightAddon,
      disabled,
      error,
      name = '',
      value = '',
      autoComplete,
      onChange,
      handleKeyPress,
      extraAddon,
      readOnly,
      onClick,
      type = 'text',
    } = this.props;
    const { focus } = this.state;
    const id = `${name}_input`;
    const hasValue = value !== '' && value !== null && value !== undefined;
    const inputWrapperClassName = this.getInputWrapperClassName();

    return (
      <div className={`${styles.wrapper} ${className}`} onClick={onClick}>
        <label
          htmlFor={id}
          className={`${styles.label}
          ${error ? styles.labelError : ''}
         ${focus ? styles.labelFocus : ''}
          ${hasValue || focus ? styles.labelFilled : ''}`}
        >
          {placeholder}
        </label>
        <div className={inputWrapperClassName}>
          {readOnly ? (
            <span className={styles.input} ref={c => (this.input = c)}>
              {value}
            </span>
          ) : (
            <input
              autoComplete={autoComplete}
              name={name}
              id={id}
              ref={c => (this.input = c)}
              type={type}
              value={value}
              readOnly={readOnly}
              onKeyPress={handleKeyPress}
              onChange={onChange ? onChange : () => ''} // eslint-disable-line
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              className={disabled ? styles.inputDisabled : styles.input}
              disabled={disabled}
            />
          )}
          <div className={styles.addon}>{rightAddon}</div>
          {extraAddon && <div className={styles.addon}>{extraAddon}</div>}
        </div>
      </div>
    );
  }
}

export default PrettyInput;
