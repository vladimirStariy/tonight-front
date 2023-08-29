import NavBarLogo from "./navbar-logo";
import NavLeftIcons from "./navbar-left-icons";
import NavRightIcons from "./navbar-right-icons";
import useScreenSize from "../utils/use-screen-size";

const NavBarUpperNav = () => {
  const screenSize = useScreenSize();

  return <>

    <NavLeftIcons />

    {screenSize.width <= 768 ? 
      <NavBarLogo width={122} height={32}/> : 
      <NavBarLogo width={180} height={48}/>
    }

    <NavRightIcons />

  </>
}

export default NavBarUpperNav;