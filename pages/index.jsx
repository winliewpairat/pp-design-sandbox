import NavBar from "../components/nav";
import Overview from "../components/overview";

export default function Home() {
  return (
    <div>
      <NavBar />
    <div style={{width:"fit-content", margin: "auto"}}>
      <Overview />
    </div>
    </div>
  );
}
