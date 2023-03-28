import { useOutletContext } from "react-router-dom"
import { Image } from "@chakra-ui/react"
import Line from "assets/images/line.png"
import Contact from "assets/images/contact.png"

const ContactSection = () => {
  const { contactRef } = useOutletContext()
  return (
    <>
      <div ref={contactRef} className="tw-py-20 tw-px-4">
        <div className="grid-2 tw-gap-4">
          <div>
            <div className="fcc">
              <Image src={Contact} objectFit={"contain"} alt="Contact" height={'500px'} />
            </div>
          </div>
          <div className="fcc">
            <div>
              <div className="fcr">
                <Image
                  src={Line}
                  objectFit={"contain"}
                  alt="Line"
                  height={"22px"}
                />
              </div>
              <div className="tw-my-3">
                <div className="fc tw-gap-x-2 font-montserrat-medium tw-text-[26px] tw-tracking-normal">
                  <div>Trying to hire me ?</div>
                  <div className="tw-text-[#FF6330]">Say hello at</div>
                </div>
                <div className="tw-text-[32px] font-montserrat-extrabold tw-tracking-wide">
                  dimasroger89@gmail.com
                </div>
              </div>
              <div className="fc">
                <Image
                  src={Line}
                  objectFit={"contain"}
                  alt="Line"
                  height={"22px"}
                />
              </div>
              <br />
              <br />
              <div className="font-montserrat-medium tw-text-[28px] tw-tracking-normal">
                See you in the sky.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
