import Title from "../components/Title";
import Card from "../components/Card";
import "../styles.css";
import Donat from "../components/Donat";
const Screen_one = () => {
  return (
    <div>
      <Title />
      <div className="containerCards">
        <div className="flex-one">
          <Card />
        </div>
        <div className="flex-two">
          <Card />
        </div>
        <div className="flex-one">
          <Card />
        </div>
        <div className="flex-two">
          <Card />
        </div>
      </div>
      <div className="containerDonat">
        <Donat />
      </div>
    </div>
  );
};

export default Screen_one;
