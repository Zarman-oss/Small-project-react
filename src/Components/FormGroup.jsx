function FormgGroup({ labelText, inputType, placeholder }) {
  return (
    <div className="container">
      <div className="form-group form-group label form-group ">
        <h3>{labelText}</h3>
        <input type={inputType} placeholder={placeholder} />
      </div>
    </div>
  );
}

export default FormgGroup;
