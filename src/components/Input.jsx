import React from "react";

export default function () {
  // const [note, setnote] = useState([]);
  // const handleSubmit = (e) => {
  //   let value = e.target.value;
  //   setnote((prevstate) => [...prevstate, value]);
  //   console.log(note);
  // };
  /*
  ()=>([]) -> ()=> {return }

*/
  return (
    <div>
      <input type="text" placeholder="Note" name="note" id="note" />
      <input type="button" value="submit" />
    </div>
  );
}
