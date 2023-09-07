import React, { useState } from "react";

import { Button, Image, Pagination, Popconfirm, Tag } from "antd";
import { AiFillEdit, AiOutlineUserAdd } from "react-icons/ai";
import { InputSearch, Selector } from "../ui-component/atoms";
import { AntdTable } from "../ui-component/molecules";
import { MdDelete } from "react-icons/md";

const users = [
  {
    id: 1,
    email: "dominh321@gmail.com",
    phone: "0347586690",
    username: "khue",
    nickName: "khue19",
    roles: 1,
    typeLogin: "Phone",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "just a bio",
    isActive: true,
  },
  {
    id: 2,
    email: "example2@gmail.com",
    phone: "0123456789",
    username: "john_doe",
    nickName: "johndoe23",
    roles: 2,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isActive: false,
  },
  {
    id: 3,
    email: "user3@example.com",
    phone: "0987654321",
    username: "alice_smith",
    nickName: "alice23",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "Hello, I'm Alice!",
    isActive: true,
  },
  {
    id: 4,
    email: "testuser4@example.com",
    phone: "1234567890",
    username: "testuser4",
    nickName: "testuser4",
    roles: 2,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "This is a test user.",
    isActive: false,
  },
  {
    id: 5,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },
  {
    id: 6,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },
  {
    id: 7,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },
  {
    id: 8,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },
  {
    id: 9,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },
  {
    id: 10,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },
  {
    id: 11,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },
  {
    id: 12,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },
  {
    id: 13,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },
  {
    id: 14,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },
  {
    id: 15,
    email: "user5@example.com",
    phone: "5678901234",
    username: "user5",
    nickName: "user5",
    roles: 1,
    typeLogin: "Email",
    avatar:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    bio: "I'm user number 5.",
    isActive: true,
  },

  // Thêm các đối tượng dữ liệu khác ở đây nếu cần
];

const Orders = () => {
  const [value, setValue] = useState("");

  const onSearch = (value) => {
    // dispatchGetCategories({ params: { search: value } });
  };

  const columns = [
    {
      dataIndex: "avatar",
      title: "Avatar",
      render: (_, record) => (
        <>
          <Image
            width={55}
            style={{
              cursor: "pointer",
              width: "60px",
              height: "60px",
            }}
            preview={{
              mask: false,
            }}
            // src={record.avatar || avatarDefault}
            src={record.avatar}
          />
        </>
      ),
      align: "center",
      width: "7%",
    },
    { dataIndex: "email", title: "Email", width: "10%" },
    { dataIndex: "phone", title: "Phone", width: "10%", align: "center" },
    { dataIndex: "username", title: "Username", width: "8%" },
    { dataIndex: "nickName", title: "Nick name", width: "8%" },
    { dataIndex: "roles", title: "Role", width: "5%", align: "center" },
    {
      dataIndex: "typeLogin",
      title: "Type login",
      width: "5%",
      align: "center",
    },
    {
      dataIndex: "isActive",
      title: "isActive",
      render: (_, record) => (
        // console.log("record",record)
        <>
          {record.isActive ? (
            <Tag
              color="blue"
              style={{
                width: "70px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              Active
            </Tag>
          ) : (
            <Tag
              color="red"
              style={{
                width: "70px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              Disabled
            </Tag>
          )}
        </>
      ),
      width: "5%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "10%",
      align: "center",
      render: (_, record) => (
        <>
          <Button
            className="w-10 mr-5"
            type="primary"
            shape="circle"
            icon={<AiFillEdit />}
          ></Button>
          <Popconfirm
            title="Bạn có chắc chắn muốn xoá?"
            okText="Đồng ý"
            cancelText="Hủy"
          >
            <Button
              className="w-10 bg-red-500"
              // type="primary"
              shape="circle"
              icon={<MdDelete className="text-white" />}
            ></Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="w-full h-full">
        <div className="flex justify-between w-full mb-4">
          <div className="flex justify-between w-800">
            <InputSearch
              // onSearch={onSearch}
              placeholder="Searching"
              style={{
                width: "600px",
              }}
              size="middle"
            />
            <Selector
              name="type"
              mode=""
              style={{
                width: "100px",
              }}
              selectStyle={{
                width: "100%",
              }}
              options={[
                { key: "email", value: "email" },
                { key: "username", value: "username" },
                { key: "nickname", value: "nickname" },
                { key: "phone", value: "phone" },
              ]}
            />
          </div>

          <Button type="primary" icon={<AiOutlineUserAdd />}>
            Add User
          </Button>
        </div>
        {/* <div>List of Swiss Federal Councillours</div> */}
        <div className="w-full h-full relative overflow-hidden flex flex-col">
          {/* <DataTable columns={columns} rows={users} checkboxSelection={false} /> */}
          <AntdTable
            columns={columns}
            dataSource={users}
            checkboxSelection={false}
          />
        </div>

        <div className="w-full h-fit-content flex flex-row justify-center items-center pt-16">
          <Pagination page={1} total={50} />
        </div>
      </div>
    </div>
  );
};
export default Orders;
