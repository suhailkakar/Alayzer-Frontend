import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Input() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  function handleclick() {
    console.log(search);
    history.push("/lookup?website=" + search);
  }

  return (
    <div className="search">
      <input
        className="input"
        type="url"
        required
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Lorem Ipusum"
      />
      <input
        type="submit"
        onClick={handleclick}
        className="button"
        value="Submit"
      />
      {/* <input type="submit" onClick={handleclick} className="button">
        {"\u00A0"}
        {"\u00A0"}Search{"\u00A0"}
        {"\u00A0"}
      </input> */}
    </div>
  );
}
export default Input;
