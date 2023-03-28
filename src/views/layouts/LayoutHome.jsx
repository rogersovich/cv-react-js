import Navbar from "components/Navbar"
import { Outlet } from "react-router-dom"

const LayoutHome = () => {
  return (
    <>
      <div className="tw-bg-[#FCF3E6] tw-min-h-screen tw-py-5">
        <Navbar />
        <div id="body-content" className="tw-py-6 tw-px-6 ">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LayoutHome
