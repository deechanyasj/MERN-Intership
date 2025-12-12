import Props from "./Props";

const LearningReact = () => {
  return (
    <div>
      <h1>Learning React Components</h1>
      <p>Learning React Components is a good way to learn React</p>
      <hr />
      <ol>
        <li>
          <Props
            hi="Welcome to Props"
            grade="12"
            age="17"
            img="/vite.svg"   // ✔ Corrected image path
          />
        </li>
      </ol>
    </div>
  );
};

export default LearningReact;
