import "./App.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
export default function App() {
  return (
    <>
      <div class="relative min-h-[100vh] w-full bg-slate-950">
      <Navbar></Navbar>
      <Manager></Manager>
        <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

    </>
  );
}
