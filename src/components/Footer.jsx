import { Box, Image } from "@chakra-ui/react"
import Icon1 from "assets/images/footer-2.png"
import Icon2 from "assets/images/footer-3.png"
// breakpoint
import { withBreakpoints } from "react-breakpoints"

const Footer = (props) => {
  console.log('test')
  const d = new Date()
  let year = d.getFullYear()
  const { breakpoints, currentBreakpoint } = props
  const isMobileLS =
    breakpoints[currentBreakpoint] < breakpoints.mobileLandscape

  return (
    <>
      <Box bgColor={"#45B4C7"} py={isMobileLS ? "3" : "4"} color={"white"}>
        <div className="fcc tw-gap-4 md:tw-gap-8">
          <div>
            <Image
              src={Icon1}
              objectFit={"contain"}
              alt="Icon1"
              height={isMobileLS ? "25px" : "45px"}
            />
          </div>
          <div className="font-lilita-one tw-text-[15px] md:tw-text-[28px] tw-tracking-wide">
            © {year} design by rogersovich
          </div>
          <div>
            <Image
              src={Icon2}
              objectFit={"contain"}
              alt="Icon2"
              height={isMobileLS ? "25px" : "45px"}
            />
          </div>
        </div>
      </Box>
    </>
  )
}

export default withBreakpoints(Footer)
