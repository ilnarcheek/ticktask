import { IconContext } from "react-icons";
import {
  HiBolt,
  HiInboxStack,
  HiOutlineBolt,
  HiOutlineInboxStack,
  HiOutlineSquares2X2,
  HiSquares2X2,
} from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { commonButton } from "../../styles/styledHelpers";
import { useAppSelector } from "../../store/hooks";

const Container = styled.div``;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: var(--fs-l);
`;

const Header = styled.h2`
  font-size: var(--fs-l);
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const StyledLink = styled(NavLink)<{ $isActive: boolean }>`
  ${commonButton}
  justify-content: start;
  padding: 1.2rem 3rem 1.2rem 1.5rem;

  background-color: ${(props) =>
    props.$isActive ? "var(--bg-black)" : "none"};
  color: ${(props) =>
    props.$isActive ? "var(--fc-white)" : "var(--fc-black)"};

  &:hover {
    background-color: ${(props) =>
      props.$isActive ? "var(--bg-black)" : "rgba(0, 0, 0, 0.05)"};
  }
`;

function NavMenu() {
  const id = useAppSelector((state) => state.currentProject.id);
  const menuItems = [
    {
      path: "/dashboard",
      label: "Дашборд",
      activeIcon: <HiSquares2X2 color="var(--c-white)" />,
      inactiveIcon: <HiOutlineSquares2X2 />,
    },
    {
      path: `/project/${id}`,
      label: "Проекты",
      activeIcon: <HiBolt color="var(--c-white)" />,
      inactiveIcon: <HiOutlineBolt />,
    },
    {
      path: "/my-tasks",
      label: "Мои задачи",
      activeIcon: <HiInboxStack color="var(--c-white)" />,
      inactiveIcon: <HiOutlineInboxStack />,
    },
  ];

  return (
    <Container>
      <Header>Меню</Header>
      <StyledMenu>
        {menuItems.map((item) => (
          <MenuItem
            isActive
            key={item.path}
            path={item.path}
            label={item.label}
            activeIcon={item.activeIcon}
            inactiveIcon={item.inactiveIcon}
          />
        ))}
      </StyledMenu>
    </Container>
  );
}

function MenuItem({
  path,
  label,
  activeIcon,
  inactiveIcon,
}: (typeof menuItems)[0] & { isActive: boolean }) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <IconContext.Provider value={{ size: "2.4rem" }}>
      <StyledLink to={path} $isActive={isActive}>
        {isActive ? activeIcon : inactiveIcon}
        <span>{label}</span>
      </StyledLink>
    </IconContext.Provider>
  );
}

export default NavMenu;
