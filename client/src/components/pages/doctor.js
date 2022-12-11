import React from "react";

const Doctor = ({doctors, setSelectd}) => { 

  //fetch all doctors
  const allDocOption = doctors.map(({id, username, name}) => <option key= {id} value={id}>{name}</option>)


  const onChangeHandler = (evnt) => {
    const { target } = evnt
    setSelectd(target.value)
  }

  //display all of them kwa table
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="form-group">
        <label htmlFor="pet-select">Choose a doctor:</label>

        <select name="doctors" id="doc-select" onChange ={onChangeHandler}>
          <option value="0">--Please choose an option--</option>
          {allDocOption}
        </select>
      </div>
     
    </div>
  );
};

export default Doctor;
