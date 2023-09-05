import { SelectOutlined } from "@ant-design/icons";
import { Table, Typography, Space, Avatar, Rate } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import DateTimePicker from 'react-datetime-picker';

function Laporan() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [date, setDate] = useState();
  // const [value, onChange] = useState < Value > (new Date());
  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Laporan</Typography.Title>

      <input type="date" onChange={e => setDate(e.target.value)}></input>

      {/* <DateTimePicker onChange={onChange} value={value} /> */}

      <Table class="tabel_laporan"
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        dataSource={dataSource}
      ></Table>
    </Space>
  );
}
export default Laporan;
