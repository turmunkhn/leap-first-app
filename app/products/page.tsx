import Image from "next/image";
import { NavigationItem } from "../components/navigation-item";

export default function Home() {
  return (
    <main style={{ backgroundColor: "orange" }}>
      <NavigationItem href="/">Home</NavigationItem>
    </main>
  );
}
