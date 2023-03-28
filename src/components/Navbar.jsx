
import { Box, Button } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <>
      <Box
        bgColor={"#45B4C7"}
        py={3}
        mx={5}
        border={"2px"}
        borderColor={"black"}
        className="font-lilita-one"
      >
        <div className="grid-12 tw-gap-4 tw-text-[24px] tw-text-center">
          <div className="tw-col-start-3 tw-col-span-2">
            <Button
              color={"black"}
              variant={"link"}
              letterSpacing="wider"
              fontSize={"2xl"}
              fontWeight={"normal"}
            >
              Home
            </Button>
          </div>
          <div className="tw-col-span-2">
            <Button
              color={"black"}
              variant={"link"}
              letterSpacing="wider"
              fontSize={"2xl"}
              fontWeight={"normal"}
            >
              Skill
            </Button>
          </div>
          <div className="tw-col-span-2">
            <Button
              color={"black"}
              variant={"link"}
              letterSpacing="wider"
              fontSize={"2xl"}
              fontWeight={"normal"}
            >
              Portofolio
            </Button>
          </div>
          <div className="tw-col-span-2 ">
            <Button
              color={"black"}
              variant={"link"}
              letterSpacing="wider"
              fontSize={"2xl"}
              fontWeight={"normal"}
            >
              Contact
            </Button>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Navbar
