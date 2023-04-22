import SearchBar from "layouts/NavBarLayout/components/SearchBar";
import {
  StyledNavBar,
  StyledNavContainer,
  StyledNavLogo,
} from "layouts/NavBarLayout/components/NavBar/styles";
import Authenticate from "layouts/NavBarLayout/components/Authenticate";
const NavBar = () => {
  return (
    <StyledNavContainer>
      <StyledNavBar>
        <StyledNavLogo>Logo</StyledNavLogo>
        <SearchBar />
        <Authenticate />
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export default NavBar;
