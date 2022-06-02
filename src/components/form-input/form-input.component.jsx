import "./form-input.style.scss";

const FormInput = ({ label, ...otherProps }) => {
  console.log("input");
  console.log(otherProps);
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}

      {/* <input {...otherProps}></input> */}
    </div>
  );
};

export default FormInput;
