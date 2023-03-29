import { Image, Box } from "@chakra-ui/react"
import CirclePink from "assets/images/circle-pink.png"
import CircleYellow from "assets/images/circle-yellow.png"
import Bintang from "assets/images/bintang.png"
import SkillAPI from "backend/skill"
import { useOutletContext } from "react-router-dom"
// breakpoint
import { withBreakpoints } from "react-breakpoints"

const SkillSection = (props) => {
  const { skillRef } = useOutletContext()
  // const isOdd = (num) => {
  //   return num % 2
  // }
  const { breakpoints, currentBreakpoint } = props
  const isMobileLS =
    breakpoints[currentBreakpoint] < breakpoints.mobileLandscape

  return (
    <>
      <div ref={skillRef} className="md:tw-py-20 tw-py-10 md:tw-px-4">
        <div className="fcb">
          <div className="fc tw-gap-1.5 font-lilita-one tw-text-[20px] md:tw-text-[40px] tw-tracking-wide">
            <div>Wanna See</div>
            <Box bgColor={"#FF6330"} color={"white"} px={"1.5"}>
              My Skill ?
            </Box>
          </div>
          <div className="fcc tw-gap-2 md:tw-gap-4">
            <Image
              src={CirclePink}
              objectFit={"contain"}
              boxSize={isMobileLS ? "15px" : "40px"}
              alt="CirclePink"
            />
            <Image
              src={CircleYellow}
              objectFit={"contain"}
              boxSize={isMobileLS ? "15px" : "40px"}
              alt="CircleYellow"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="grid-2 tw-gap-10">
          {SkillAPI.map((item, key) => (
            <div key={key} className="tw-col-span-2 md:tw-col-span-1">
              <Box
                border={"2px"}
                borderColor={"black"}
                boxShadow={"6px 6px 0px #000000"}
                px={isMobileLS ? 4 : 6}
                py={isMobileLS ? 4 : 6}
                className="tw-relative"
              >
                <div>
                  <div className="title-skill font-montserrat-bold text-shadow">
                    {item.name}
                  </div>
                  <div className="fc-desktop tw-gap-3 tw-mt-1 md:tw-mt-0 tw-mb-3 md:tw-mb-2">
                    <div className="subtitle-skill font-montserrat-bold tw-mb-1.5 md:tw-mb-0">
                      Level :
                    </div>
                    <div className="fcc-desktop fc tw-gap-2">
                      {[...Array(6)].map((x, i) => (
                        <Image
                          key={i}
                          src={Bintang}
                          objectFit={"contain"}
                          boxSize={isMobileLS ? "20px" : "25px"}
                          alt="Bintang"
                          filter={i + 1 > item.level ? "grayscale(100%)" : null}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="desc-skill font-montserrat-medium">
                    {item.desc}
                  </div>
                </div>

                <div className="img-skill-br">
                  <Image
                    src={item.image}
                    objectFit={"contain"}
                    boxSize={isMobileLS ? "60px" : "80px"}
                    alt={`image-${key}`}
                  />
                </div>
              </Box>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default withBreakpoints(SkillSection)
