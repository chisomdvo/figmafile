import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import Content from "../components/content";
import Mobile from "../components/mobile"


export default function Figma() {
  return (
    <div>
    <div className="grid grid-rows-3 grid-flow-col gap-4 hidden">
      <div className="row-span-3 col-span-1 "><Sidebar/></div>
      <div className="col-span-4 "><Navbar/></div>
      <div className="row-span-2 col-span-2"><Content/> </div>
    </div>
    <Mobile />
    </div>
  
  )
}
