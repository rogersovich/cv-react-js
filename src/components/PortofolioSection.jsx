import { Image, Box, Button } from "@chakra-ui/react"
import CirclePink from "assets/images/circle-pink.png"
import CircleYellow from "assets/images/circle-yellow.png"
import PortofolioAPI from "backend/portofolio"
import { useOutletContext, Link } from "react-router-dom"
// breakpoint
import { withBreakpoints } from "react-breakpoints"

const PortofolioSection = (props) => {
  const { portofolioRef } = useOutletContext()

  const filterAPI = () => {
    return PortofolioAPI.filter((item) => item.onBoarding)
  }

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
          {filterAPI().map((item, key) => (
            <div className="lg:tw-col-start-2 lg:tw-col-span-10 2xl:tw-col-start-3 2xl:tw-col-span-8 tw-col-span-12" key={key}>
              <Image
                src={item.image}
                objectFit={"contain"}
                alt={item.alt}
                width={"full"}
              />
            </div>
          ))}
        </div>

        <div className="tw-text-center tw-mt-10">
          <Link to={"portofolio"}>
            <Button
              bgColor={"#FF6330"}
              color={"white"}
              height={isMobileLS ? "40px" : "14"}
              px={isMobileLS ? "12" : "16"}
              fontSize={isMobileLS ? "12px" : "22px"}
              letterSpacing={"widest"}
              _hover={{ bg: "#FF6330", transform: "scale(1.1)" }}
              _active={{ bg: "#FF6330" }}
              border={"2px"}
              borderColor={"black"}
              boxShadow={"4px 4px 0px #000000"}
              className="upper font-montserrat-bold"
            >
              Lihat Semuanya
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default withBreakpoints(PortofolioSection)
