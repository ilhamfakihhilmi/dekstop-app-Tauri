import { Space, Badge, Typography } from "antd";
import { MailOutlined, BellFilled } from "@ant-design/icons";
import logos from "../../Assets/Images/logos.png"

function AppHeader() {
  return (
    <div class="AppHeader">
      <img src={logos} alt="Kimia Farma" width={100} />
      <Typography.Title>Dashboard Utama</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}
export default AppHeader;
