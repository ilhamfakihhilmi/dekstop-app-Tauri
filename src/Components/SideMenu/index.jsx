import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SlideMenu() {
  const navigate = useNavigate();
  return (
    <div class="SlideMenu">
      <Menu
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        items={[
          {
            label: "Pelayanan",
            icon: <DollarOutlined />,
            key: "/",
          },
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/Dashboard",
          },
          {
            label: "Inventory",
            icon: <ShopOutlined />,
            key: "/inventory",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/orders",
          },
          {
            label: "Customers",
            icon: <UserOutlined />,
            key: "/customers",
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SlideMenu;
