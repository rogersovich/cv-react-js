import Crown from "assets/images/crown-il.svg"
import HeroRight from "assets/images/hero-right.svg"
import { Image, Button } from "@chakra-ui/react"
import { socialMedia } from "backend/home"

const HomeSection = () => {

  const routeSocialMedia = (type) => {
    alert(type)
  }

  return (
    <>
      <div className="tw-py-16">
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
                height={"14"}
                px={"20"}
                fontSize={"24px"}
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
              {socialMedia.map((item, key) => (
                <Image
                  key={key}
                  src={item.image}
                  alt={item.alt}
                  height={"10"}
                  _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
                  onClick={() => routeSocialMedia(item.alt)}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="fcc">
              <Image
                src={HeroRight}
                objectFit={"contain"}
                height={"700px"}
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
