/* eslint-disable react/prop-types */
const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ part1, part2, part3 }) => {
  const arr_parts = [part1, part2, part3];

  return (
    <div>
      {arr_parts.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

const Total = ({ e1, e2, e3 }) => e1 + e2 + e3;

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />

      <Content part1={part1} part2={part2} part3={part3} />

      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  );
};

export default App;
