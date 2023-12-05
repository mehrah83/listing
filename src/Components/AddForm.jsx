import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddForm = ({addData}) => {
  const initialData = {
    title: "",
    desc: "",
  };
  const [inputdata, setInputData] = useState(initialData);

  const handleChange = (e) => {
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputdata.title || !inputdata.desc) {
      alert("All fields are mandatory");
    } else {
      alert("You details has been submitted");
      setInputData(initialData);
      addData(inputdata);
    }
  };
  return (
    <>
    <div className="container">
      <form>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title..."
            value={inputdata.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Enter Description..."
            value={inputdata.desc}
            onChange={handleChange}
          />
        </div>
      </form>
      <button className="addBtn" onClick={handleAdd}>
        Add
      </button>
      </div>
    </>
  );
};

export default AddForm;
