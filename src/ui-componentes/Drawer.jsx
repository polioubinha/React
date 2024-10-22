import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";

function SidebarMenu() {
  return (
    <Sidebar width={"270px"}>
      <Logo img="https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png">
        AdminMart
      </Logo>
      <Menu subHeading="HOME">
        <MenuItem link="/">Modern</MenuItem>
        <MenuItem>eCommerce</MenuItem>
        <MenuItem>Analytical</MenuItem>
      </Menu>
      <Menu subHeading="APPS">
        <MenuItem link="/chat">Chat</MenuItem>
        <MenuItem link="/calendar">Calendar</MenuItem>
      </Menu>
      <Menu subHeading="OTHERS">
        <Submenu title="Menu Level">
          <MenuItem>Post</MenuItem>
          <MenuItem>Details</MenuItem>
          <Submenu title="Level 2">
            <MenuItem>new</MenuItem>
            <MenuItem>Hello</MenuItem>
          </Submenu>
        </Submenu>
        <MenuItem>Chip</MenuItem>
        <MenuItem target="_blank" link="https://google.com">
          External Link
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SidebarMenu;
