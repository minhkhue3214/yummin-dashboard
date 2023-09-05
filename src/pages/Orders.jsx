import React, { useState } from "react";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

import {
  StatusOnlineIcon,
  StatusOfflineIcon,
  SearchIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  Flex,
  TextInput,
  Button,
  Select,
  SelectItem,
} from "@tremor/react";

const data = [
  {
    id: 1,
    email: "dominh321@gmail.com",
    phone: "0347586690",
    username: "khue",
    nickName: "khue19",
    roles: 1,
    typeLogin: "Phone",
    avatar: null,
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
    avatar: "avatar2.jpg",
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
    avatar: "avatar3.jpg",
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
    avatar: "avatar4.jpg",
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
    avatar: "avatar5.jpg",
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
    avatar: "avatar5.jpg",
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
    avatar: "avatar5.jpg",
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
    avatar: "avatar5.jpg",
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
    avatar: "avatar5.jpg",
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
    avatar: "avatar5.jpg",
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
    avatar: "avatar5.jpg",
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
    avatar: "avatar5.jpg",
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
    avatar: "avatar5.jpg",
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
    avatar: "avatar5.jpg",
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
    avatar: "avatar5.jpg",
    bio: "I'm user number 5.",
    isActive: true,
  },

  // Thêm các đối tượng dữ liệu khác ở đây nếu cần
];

const Orders = () => {
  const [value, setValue] = useState("");
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Users" />
      <Card>
        <Flex className="mb-4">
          <Flex justifyContent="around" className="w-800">
            <TextInput
              className="w-4/5 mr-10"
              icon={SearchIcon}
              placeholder="Search..."
            />
            <Select className="w-1/5" value={value} onValueChange={setValue}>
              <SelectItem value="1">Username</SelectItem>
              <SelectItem value="2">Nickname</SelectItem>
              <SelectItem value="3">Email</SelectItem>
              <SelectItem value="4">Phone</SelectItem>
            </Select>
          </Flex>

          <Button icon={PlusIcon}>Add new product</Button>
        </Flex>
        <Title>List of Swiss Federal Councillours</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Phone</TableHeaderCell>
              <TableHeaderCell>Username</TableHeaderCell>
              <TableHeaderCell>NickName</TableHeaderCell>
              <TableHeaderCell>Roles</TableHeaderCell>
              <TableHeaderCell>typeLogin</TableHeaderCell>
              <TableHeaderCell>Bio</TableHeaderCell>
              <TableHeaderCell>Active</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <Text>{item.phone}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.username}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.nickName}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.roles}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.typeLogin}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.bio}</Text>
                </TableCell>
                <TableCell>
                  {item.isActive ? (
                    <Badge color="emerald" icon={StatusOnlineIcon}>
                      Active
                    </Badge>
                  ) : (
                    <Badge color="red" icon={StatusOfflineIcon}>
                      Disabled
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  <Flex>
                    <Button color="red">Delete</Button>
                    <Button>Update</Button>
                  </Flex>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
export default Orders;
