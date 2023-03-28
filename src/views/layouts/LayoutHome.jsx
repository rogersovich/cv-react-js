import Navbar from "components/Navbar"
import Footer from "components/Footer"
import { Outlet } from "react-router-dom"
import { useRef } from "react"

const LayoutHome = () => {
  const homeRef = useRef(null)
  const skillRef = useRef(null)
  const portofolioRef = useRef(null)
  const contactRef = useRef(null)

  const listRef = {
    homeRef: homeRef,
    skillRef: skillRef,
    portofolioRef: portofolioRef,
    contactRef: contactRef,
  }

  return (
    <>
      <div className="tw-bg-[#FCF3E6] tw-min-h-screen tw-relative">
        <Navbar
          homeRef={homeRef}
          skillRef={skillRef}
          portofolioRef={portofolioRef}
          contactRef={contactRef}
        />

        <div id="body-content" className="tw-py-6 tw-px-6 ">
          <Outlet context={listRef} />
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default LayoutHome
