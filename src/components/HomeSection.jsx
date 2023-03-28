import Crown from "assets/images/crown-il.svg"
import Github from "assets/images/github.png"
import Email from "assets/images/email.png"
import Wa from "assets/images/wa.png"
import Linkedin from "assets/images/linkedin.png"
import HeroRight from "assets/images/hero-right.svg"
import { Image, Button } from "@chakra-ui/react"

const HomeSection = () => {
  return (
    <>
      <div className="tw-py-20">
        <div className="grid-2 tw-gap-4">
          <div className="tw-text-center">
            <div className="fcc">
              <Image src={Crown} alt="Crown" height={"40"} />
            </div>
            <div className="font-lilita-one tw-text-[50px] tw-tracking-wider tw-my-5">
              <div>Hellow</div>
              <div>I'am Roger</div>
              <div>Front End Developer</div>
            </div>
            <div>
              <Button
                bgColor={"#FF6330"}
                color={"white"}
                size={"lg"}
                px={"16"}
                fontSize={"xl"}
                letterSpacing={"widest"}
                _hover={{ bg: "#FF6330", transform: "scale(1.1)" }}
                _active={{ bg: "#FF6330" }}
                border={"2px"}
                borderColor={"black"}
                boxShadow={"4px 4px 0px #000000"}
                className="upper font-montserrat-bold"
              >
                hire me
              </Button>
            </div>
            <br />
            <div className="fcc tw-gap-4">
              <Image src={Github} alt="Github" height={"10"} />
              <Image src={Linkedin} alt="Linkedin" height={"10"} />
              <Image src={Wa} alt="Wa" height={"10"} />
              <Image src={Email} alt="Email" height={"10"} />
            </div>
          </div>
          <div>
            <div className="fcc">
              <Image
                src={HeroRight}
                objectFit={"contain"}
                height={"600px"}
                alt="HeroRight"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection
