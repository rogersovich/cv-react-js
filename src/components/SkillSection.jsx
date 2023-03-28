import { Image, Box } from "@chakra-ui/react"
import CirclePink from "assets/images/circle-pink.png"
import CircleYellow from "assets/images/circle-yellow.png"
import Bintang from "assets/images/bintang.png"
import Bunga from "assets/images/bunga.png"
import Kodok from "assets/images/kodok.png"
import SkillAPI from "backend/skill"

const SkillSection = () => {
  const isOdd = (num) => {
    return num % 2
  }
  return (
    <>
      <div className="tw-py-20 tw-px-4">
        <div className="fcb">
          <div className="fc tw-gap-1.5 font-lilita-one tw-text-[40px] tw-tracking-wide">
            <div>Wanna See</div>
            <Box bgColor={"#FF6330"} color={"white"} px={"1.5"}>
              My Skill ?
            </Box>
          </div>
          <div className="fcc tw-gap-4">
            <Image
              src={CirclePink}
              objectFit={"contain"}
              boxSize="40px"
              alt="CirclePink"
            />
            <Image
              src={CircleYellow}
              objectFit={"contain"}
              boxSize="40px"
              alt="CircleYellow"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="grid-2 tw-gap-10">
          {SkillAPI.map((item, key) =>
            isOdd(key + 1) !== 1 ? (
              <div key={key}>
                <Box
                  border={"2px"}
                  borderColor={"black"}
                  boxShadow={"6px 6px 0px #000000"}
                  px={6}
                  py={6}
                  className="tw-relative"
                >
                  <div>
                    <div className="title-skill">{item.name}</div>
                    <div className="fc tw-gap-3 tw-mb-2">
                      <div className="subtitle-skill">Level :</div>
                      <div className="fcc tw-gap-2">
                        {[...Array(item.level)].map((x, i) => (
                          <Image
                            key={i}
                            src={Bintang}
                            objectFit={"contain"}
                            boxSize="25px"
                            alt="Bintang"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="desc-skill">{item.desc}</div>
                  </div>

                  <div className="img-skill-br">
                    <Image
                      src={Kodok}
                      objectFit={"contain"}
                      boxSize="80px"
                      alt="Kodok"
                    />
                  </div>
                </Box>
              </div>
            ) : (
              <div key={key}>
                <Box
                  border={"2px"}
                  borderColor={"black"}
                  boxShadow={"6px 6px 0px #000000"}
                  px={6}
                  py={6}
                  className="tw-relative"
                >
                  <div>
                    <div className="title-skill">{item.name}</div>
                    <div className="fc tw-gap-3 tw-mb-2">
                      <div className="subtitle-skill">Level :</div>
                      <div className="fcc tw-gap-2">
                        {[...Array(item.level)].map((x, i) => (
                          <Image
                            key={i}
                            src={Bintang}
                            objectFit={"contain"}
                            boxSize="25px"
                            alt="Bintang"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="desc-skill">{item.desc}</div>
                  </div>

                  <div className="img-skill-tr">
                    <Image
                      src={Bunga}
                      objectFit={"contain"}
                      boxSize="80px"
                      alt="Bunga"
                    />
                  </div>
                </Box>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default SkillSection
