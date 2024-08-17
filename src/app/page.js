import Navbar from "./components/Navbar";
import Side from "./components/Side";
import Homes from "./pages/Home";

export default function Home() {
  return (
    <div className="home">
      <Side />
      <div>
        <Navbar />
        <Homes />
      </div>
    </div>
  );
}
