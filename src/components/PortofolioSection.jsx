import { Image, Box } from "@chakra-ui/react"
import CirclePink from "assets/images/circle-pink.png"
import CircleYellow from "assets/images/circle-yellow.png"
import CardPorto1 from "assets/images/card-porto.svg"

const PortofolioSection = () => {
  return (
    <>
      <div className="tw-py-20 tw-px-4">
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

        <div className="grid-12 tw-gap-10">
         
          <div className="tw-col-start-2 tw-col-span-10">
            <Image
              src={CardPorto1}
              objectFit={"contain"}
              alt="CardPorto1"
              width={"full"}
            />
          </div>
      
        </div>
      </div>
    </>
  )
}

export default PortofolioSection
