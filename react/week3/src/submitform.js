import React from "react";
import { useState, useEffect, useCallback } from "react";

const SubmitForm = (props) => {
  const [description, setDescription] = useState("");

  const [deadline, setDeadline] = useState("");

  const [completed, setCompleted] = useState("");

  const [id, setId] = useState("");

  const [editMode, setEditMode] = useState("");

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
    console.log("description", description);
  };

  const onChangeDeadline = (e) => {
    setDeadline(e.target.value);
    console.log("deadline", deadline);
  };

  const UpdateForm = () => {
    let generatedId = JSON.stringify(new Date());
    props.setShifts((prev) =>
      prev.concat({
        description: description,
        deadline: deadline,
        completed: completed,
        id: generatedId,
        editMode: editMode,
      })
    );
  };

  return (
    <div>
      Todo description
      <input type="text" value={description} onChange={onChangeDescription} />
      <br></br>
      deadline
      <input type="date" value={deadline} onChange={onChangeDeadline} />
      <br></br>
      <button onClick={UpdateForm}>Add todo</button>
    </div>
  );
};
export default SubmitForm;
