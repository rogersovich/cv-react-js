import { Box, Image } from "@chakra-ui/react"
import Icon1 from "assets/images/footer-2.png"
import Icon2 from "assets/images/footer-3.png"

const Footer = () => {
  const d = new Date()
  let year = d.getFullYear()
  return (
    <>
      <Box bgColor={"#45B4C7"} py={"4"} color={"white"}>
        <div className="fcc tw-gap-8">
          <div>
            <Image
              src={Icon1}
              objectFit={"contain"}
              alt="Icon1"
              height={"45px"}
            />
          </div>
          <div className="font-lilita-one tw-text-[28px] tw-tracking-wide">
            © {year} design by rogersovich
          </div>
          <div>
            <Image
              src={Icon2}
              objectFit={"contain"}
              alt="Icon2"
              height={"45px"}
            />
          </div>
        </div>
      </Box>
    </>
  )
}

export default Footer
