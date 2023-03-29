import { Box, Button } from "@chakra-ui/react"
import { navbarData, navbarPortofolio } from "backend/home"
import { useLocation, Link } from "react-router-dom"
import { TbArrowLeft } from "react-icons/tb"

const Navbar = (props) => {
  const { pathname } = useLocation()

  const scrollToView = (type) => {
    switch (type) {
      case "Home":
        props.homeRef.current?.scrollIntoView({ behavior: "smooth" })
        break
      case "Skill":
        props.skillRef.current?.scrollIntoView({
          behavior: "smooth",
        })
        break
      case "Portofolio":
        props.portofolioRef.current?.scrollIntoView({ behavior: "smooth" })
        break
      case "Contact":
        props.contactRef.current?.scrollIntoView({ behavior: "smooth" })
        break
      default:
        break
    }
  }

  return (
    <>
      <div className="fcc tw-sticky tw-z-20 tw-top-4 tw-left-0">
        <Box
          bgColor={"#45B4C7"}
          py={3}
          border={"2px"}
          borderColor={"black"}
          className="font-lilita-one tw-w-[98%]"
        >
          {pathname === "/portofolio" ? (
            <div className="grid-12 tw-gap-4 tw-text-[24px] tw-text-center">
              {navbarPortofolio.map((item, key) =>
                key === 0 ? (
                  <div className="tw-col-start-4 tw-col-span-2 fcc" key={key}>
                    <Link to={'/'} className="fcc">
                      <Button
                        leftIcon={<TbArrowLeft size={"28"} />}
                        color={"black"}
                        variant={"link"}
                        letterSpacing="wider"
                        fontSize={"2xl"}
                        fontWeight={"normal"}
                        onClick={() => scrollToView(item.name)}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="tw-col-span-2 fcc" key={key}>
                    <Button
                      color={"black"}
                      variant={"link"}
                      letterSpacing="wider"
                      fontSize={"2xl"}
                      fontWeight={"normal"}
                      onClick={() => scrollToView(item.name)}
                    >
                      {item.name}
                    </Button>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="grid-12 tw-gap-4 tw-text-[24px] tw-text-center">
              {navbarData.map((item, key) =>
                key === 0 ? (
                  <div className="tw-col-start-3 tw-col-span-2 fcc" key={key}>
                    <Button
                      color={"black"}
                      variant={"link"}
                      letterSpacing="wider"
                      fontSize={"2xl"}
                      fontWeight={"normal"}
                      onClick={() => scrollToView(item.name)}
                    >
                      {item.name}
                    </Button>
                  </div>
                ) : (
                  <div className="tw-col-span-2 fcc" key={key}>
                    <Button
                      color={"black"}
                      variant={"link"}
                      letterSpacing="wider"
                      fontSize={"2xl"}
                      fontWeight={"normal"}
                      onClick={() => scrollToView(item.name)}
                    >
                      {item.name}
                    </Button>
                  </div>
                )
              )}
            </div>
          )}
        </Box>
      </div>
    </>
  )
}

export default Navbar
