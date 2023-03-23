import "./App.css";
// import Counter from "./components/counter";
// import Profile from "./components/profile";
import Resume from "./components/resume";
function App() {
  return (
      <div className="App">
        {/* <Counter /> */}
        {/* <Profile name="jamshed" lastname="khan" /> */}
        <Resume name="jamshed" lastname="mehsud"/>
        <Resume name="Shanza" lastname="mehsud"/>
        
        
      </div>
  );
}

export default App;
