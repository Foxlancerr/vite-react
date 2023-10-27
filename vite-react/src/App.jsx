// function App() {
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   );
// }

// export default App;

/**
 * How React Work Behind The Scene
 * ******************************************************
 */

const Demo1 = {
  type: "a",
  props: {
    href : "#",
    target: "_blank"
  }
}

function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;

/**
 * Inline Sub componets
 * ******************************************************
 */
// const SubComponent = () => <h1>Sub Component</h1>;
// const List = () => {
//   return (
//     <ul>
//       <li>List1</li>
//       <li>List2</li>
//       <li>List3</li>
//     </ul>
//   );
// };
// const Para = () => {
//   return <p>Paragraph</p>;
// };

// function App() {
//   return (
//     <>
//       <SubComponent />
//       <List></List>
//       <Para></Para>
//       <hr />
//       <h1>Hello World</h1>
//     </>
//   );
// }

// export default App;

/**
 * Inline stylings
 * ******************************************************
 */

// const style1 = {
//   backgroundColor: "red",
//   color: "white",
// };

// const style2 = {
//   fontSize: "30px",
//   textDecoration: "underline",
// };

// function App() {
//   return (
//     <>
//       <h1 style={{ padding: "0px", margin: "0px", ...style1, ...style2 }}>
//         Hello World
//       </h1>
//     </>
//   );
// }

// export default App;
