import styled from "styled-components";
const Navbar = () => {
  return (
    <Nav>
      <li>Recent</li>
      <li>Favorites</li>
      <li>Playlists</li>
    </Nav>
  );
};
const Nav = styled.span`
  color: white;
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 40%;
  align-items: center;
  font-size: 20px;
  font-weight: 100;
  li {
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      font-size: 25px;
      color: blanchedalmond;
    }
  }
`;
export default Navbar;
