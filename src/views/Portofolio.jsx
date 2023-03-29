import { Image, Box } from "@chakra-ui/react"
import CirclePink from "assets/images/circle-pink.png"
import CircleYellow from "assets/images/circle-yellow.png"
import PortofolioAPI from "backend/portofolio"
import { useOutletContext } from "react-router-dom"
import ContactSection from "components/ContactSection"
// breakpoint
import { withBreakpoints } from "react-breakpoints"

const Portofolio = (props) => {
  const { portofolioRef } = useOutletContext()
  const { breakpoints, currentBreakpoint } = props
  const isMobileLS =
    breakpoints[currentBreakpoint] < breakpoints.mobileLandscape
  return (
    <>
      <div ref={portofolioRef} className="md:tw-py-20 tw-py-4 md:tw-px-4">
        <div className="fcc md:tw-gap-8 tw-gap-6 md:tw-mb-20 tw-mb-6">
          <Image
            src={CirclePink}
            objectFit={"contain"}
            boxSize={isMobileLS ? "15px" : "40px"}
            alt="CirclePink"
          />
          <div className="fc tw-gap-1.5 font-lilita-one md:tw-text-[40px] tw-text-[20px] tw-tracking-wide">
            <div>I Have </div>
            <Box bgColor={"#FF6330"} color={"white"} px={"1.5"}>
              Portofolio ?
            </Box>
          </div>
          <Image
            src={CircleYellow}
            objectFit={"contain"}
            boxSize={isMobileLS ? "15px" : "40px"}
            alt="CircleYellow"
          />
        </div>

        <div className="grid-12 tw-gap-y-10">
          {PortofolioAPI.map((item, key) => (
            <div
              className="md:tw-col-start-2 md:tw-col-span-10 tw-col-span-12"
              key={key}
            >
              <Image
                src={item.image}
                objectFit={"contain"}
                alt={item.alt}
                width={"full"}
              />
            </div>
          ))}
        </div>
      </div>
      <ContactSection></ContactSection>
    </>
  )
}

export default withBreakpoints(Portofolio)
