import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { BiGift, BiUser } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Work } from "@mui/icons-material";

export default function UserMenu({ userPic }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    try {
      localStorage.removeItem("user");
      window.location.href = "/login";
      /* const response = await getRequest("/logout");
      console.log(response);
      if (response.data.success === true) {
        localStorage.removeItem("user");
        window.location.href = "/login";
      } */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Avatar
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        alt="User Avatar"
        src={userPic}
        sx={{ width: 50, height: 50 }}
        className="cursor-pointer"
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="flex gap-3" onClick={() => navigate("/profile")}>
          {" "}
          <BiUser className="text-2xl" /> Profil
        </MenuItem>
        <MenuItem className="flex gap-3" onClick={() => navigate("/post-offer")}>
          {" "}
          <Work className="text-2xl" /> Ajouter une offre
        </MenuItem>
        <MenuItem className="flex gap-3" onClick={logout}>
          {" "}
          <HiOutlineLogout className="text-2xl rotate-180" /> Déconnexion{" "}
        </MenuItem>
      </Menu>
    </div>
  );
}
