import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { NavigationItem } from "./components/navigation-item";

const Test = () => {
  const array = [1, 2, 3, 4, 5];

  return <div>{array}</div>;
};

export default function Home() {
  const array = ["Odko", "Uyanga", "Buyana", "Gerelt", "Orkhon", "Altantulga"];
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <NavigationItem text="Test">Test</NavigationItem>
      <Button variant="contained">Hi, Odko!</Button>
      <Button variant="outlined">Hi, Turuu!</Button>
      <Button variant="text">Hi, Buynaa!</Button>
      <StarIcon style={{ fill: "red" }} />
      <div>Testing</div>
      <button>Testing</button>
      <Test />
    </div>
  );
}
