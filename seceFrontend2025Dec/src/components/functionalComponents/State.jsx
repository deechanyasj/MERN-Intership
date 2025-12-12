import { useState } from "react";
const State = () => {
    const [state, updateState] = useState("State");

    function setState() {
        updateState("Updated State");
    }

    return (
        <div>
            <h2>This is a {state} Component</h2>
            <button onClick={setState}>Update</button>
        </div>
    );
};

export default State;
