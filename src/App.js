import Navbar from "./screen/NavBar";
import Screen_one from "./screen/Screen_one";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Screen_one />
      </div>
    </>
  );
}
