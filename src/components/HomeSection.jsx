import Crown from "assets/images/crown-il.svg"
import HeroRight from "assets/images/hero-right.svg"
import { Image, Button } from "@chakra-ui/react"
import { socialMedia } from "backend/home"
import { useOutletContext } from "react-router-dom"
// breakpoint
import { withBreakpoints } from "react-breakpoints"

const HomeSection = (props) => {
  const { homeRef } = useOutletContext()

  const { breakpoints, currentBreakpoint } = props
  const isMobileLS =
    breakpoints[currentBreakpoint] < breakpoints.mobileLandscape

  const routeSocialMedia = (type) => {
    if (type === "Github") {
      window.open("https://github.com/rogersovich", "_blank")
    } else if (type === "Linkedin") {
      window.open(
        "https://www.linkedin.com/in/dimas-roger-9b93491a1/",
        "_blank"
      )
    } else if (type === "Email") {
      window.open("mailto:dimasroger89@gmail.com", "_blank")
    } else {
      window.open(
        "https://api.whatsapp.com/send?phone=6289627210822&text=Hellow",
        "_blank"
      )
    }
  }

  const getMyCV = () => {
    window.open(
      "https://drive.google.com/file/d/14k-N2XqxXyTIjF055wmpMacMVtCQCydN/view?usp=sharing",
      "_blank"
    )
  }

  return (
    <>
      <div ref={homeRef} className="md:tw-py-16 tw-py-4">
        <div className="grid-2 tw-gap-4">
          <div className="tw-text-center tw-col-span-2 md:tw-col-span-1">
            <div className="fcc">
              <Image
                src={Crown}
                alt="Crown"
                height={isMobileLS ? "20" : "40"}
              />
            </div>
            <div className="font-lilita-one tw-text-[25px] md:tw-text-[50px] tw-tracking-wider tw-my-5">
              <div>Hellow</div>
              <div>I'am Roger</div>
              <div>Front End Developer</div>
            </div>
            <div>
              <Button
                bgColor={"#FF6330"}
                color={"white"}
                height={isMobileLS ? "10" : "14"}
                px={isMobileLS ? "6em" : "20"}
                fontSize={isMobileLS ? "12px" : "24px"}
                letterSpacing={"widest"}
                _hover={{ bg: "#FF6330", transform: "scale(1.1)" }}
                _active={{ bg: "#FF6330" }}
                border={"2px"}
                borderColor={"black"}
                boxShadow={"4px 4px 0px #000000"}
                className="capital font-montserrat-bold"
                onClick={getMyCV}
              >
                Get My CV
              </Button>
            </div>
            <br />
            <div className="fcc tw-gap-4">
              {socialMedia.map((item, key) => (
                <Image
                  key={key}
                  src={item.image}
                  alt={item.alt}
                  height={isMobileLS ? "8" : "10"}
                  _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
                  onClick={() => routeSocialMedia(item.alt)}
                />
              ))}
            </div>
          </div>
          <div className="tw-col-span-2 md:tw-col-span-1">
            <div className="fcc">
              <Image
                src={HeroRight}
                objectFit={"contain"}
                height={isMobileLS ? "350px" : "700px"}
                alt="HeroRight"
                className={isMobileLS ? "tw-rotate-[90deg]" : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withBreakpoints(HomeSection)
