import { Image, Box, Button } from "@chakra-ui/react"
import CirclePink from "assets/images/circle-pink.png"
import CircleYellow from "assets/images/circle-yellow.png"
import PortofolioAPI from "backend/portofolio"
import { useOutletContext, Link } from "react-router-dom"

const PortofolioSection = () => {
  const { portofolioRef } = useOutletContext()

  const filterAPI = () => {
    return PortofolioAPI.filter((item) => item.onBoarding)
  }

  return (
    <>
      <div ref={portofolioRef} className="tw-py-20 tw-px-4">
        <div className="fcc tw-gap-8 tw-mb-20">
          <Image
            src={CirclePink}
            objectFit={"contain"}
            boxSize="40px"
            alt="CirclePink"
          />
          <div className="fc tw-gap-1.5 font-lilita-one tw-text-[40px] tw-tracking-wide">
            <div>I Have </div>
            <Box bgColor={"#FF6330"} color={"white"} px={"1.5"}>
              Portofolio ?
            </Box>
          </div>
          <Image
            src={CircleYellow}
            objectFit={"contain"}
            boxSize="40px"
            alt="CircleYellow"
          />
        </div>

        <div className="grid-12 tw-gap-y-10">
          {filterAPI().map((item, key) => (
            <div className="tw-col-start-2 tw-col-span-10" key={key}>
              <Image
                src={item.image}
                objectFit={"contain"}
                alt={item.alt}
                width={"full"}
              />
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <div className="tw-text-center">
          <Link to={'portofolio'}>
            <Button
              bgColor={"#FF6330"}
              color={"white"}
              height={"14"}
              px={"16"}
              fontSize={"22px"}
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

export default PortofolioSection
