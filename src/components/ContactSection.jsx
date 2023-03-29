import { useOutletContext } from "react-router-dom"
import { Image } from "@chakra-ui/react"
import Line from "assets/images/line.png"
import Contact from "assets/images/contact.png"
// breakpoint
import { withBreakpoints } from "react-breakpoints"

const ContactSection = (props) => {
  const { breakpoints, currentBreakpoint } = props
  const isMobileLS =
    breakpoints[currentBreakpoint] < breakpoints.mobileLandscape
  const { contactRef } = useOutletContext()
  return (
    <>
      <div ref={contactRef} className="md:tw-py-20 tw-py-4 md:tw-px-4">
        <div className="grid-2 md:tw-gap-4 tw-gap-0">
          <div className="tw-col-span-2 md:tw-col-span-1">
            <div className="fcc">
              <Image
                src={Contact}
                objectFit={"contain"}
                alt="Contact"
                height={isMobileLS ? "250px" : "500px"}
                className={isMobileLS ? 'tw-rotate-[-90deg]' : ''}
              />
            </div>
          </div>
          <div className="fcc tw-col-span-2 md:tw-col-span-1">
            <div className="tw-w-full tw-px-6 md:tw-px-0">
              <div className="fcr">
                <Image
                  src={Line}
                  objectFit={"contain"}
                  alt="Line"
                  height={isMobileLS ? "13px" : "22px"}
                />
              </div>
              <div className="tw-my-2 md:tw-my-3">
                <div className="fc tw-gap-x-2 font-montserrat-medium tw-text-[15px] md:tw-text-[26px] tw-tracking-normal">
                  <div>Trying to hire me ?</div>
                  <div className="tw-text-[#FF6330]">Say hello at</div>
                </div>
                <div className="tw-text-[18px] md:tw-text-[32px] font-montserrat-extrabold tw-tracking-wide">
                  dimasroger89@gmail.com
                </div>
              </div>
              <div className="fc">
                <Image
                  src={Line}
                  objectFit={"contain"}
                  alt="Line"
                  height={isMobileLS ? "13px" : "22px"}
                />
              </div>
              <div className="tw-mt-6">
                <div className="font-montserrat-medium tw-text-[16px] md:tw-text-[28px] tw-tracking-normal">
                  See you in the sky.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withBreakpoints(ContactSection)
