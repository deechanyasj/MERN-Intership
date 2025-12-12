import "../../css/App.css";
import Props from "./Props.jsx";
import State from "./State.jsx";   // ✅ Add this

function Navbar() {
    return (
        <>
            <nav style={{ backgroundColor: "black", color: "aqua" }}>
                <ul>
                    <li>Home</li>
                    <li>About</li>

                    <li>
                        Learning React
                        <ol>
                            <li>
                                <Props 
                                    hi="Welcome to Props"
                                    grade="12th"
                                    age="17"
                                    img="public/vite.svg"
                                />
                            </li>
                            <li>Props Task</li>
                            <li><State /></li>
                            <li>State Task</li>
                        </ol>
                    </li>

                    <li>
                        Deechanya
                        <ol>
                            <li></li>
                        </ol>
                    </li>

                    <li>Contact</li>
                </ul>
            </nav>

            <p>The above content is Navbar</p>
        </>
    );
}

export default Navbar;
