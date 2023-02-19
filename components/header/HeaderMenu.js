import React from "react";
import Link from "next/link";
import { Button, Menu } from "antd";

const HeaderMenu = () => {
  return (
    <Menu
      className="header_menu"
      theme="light"
      // mode="horizontal"
      overflowedIndicator={false}
    >
      <Link href="/about">
        <Menu.Item className="item small_text">About</Menu.Item>
      </Link>
      <Link href="/services">
        <Menu.Item className="item small_text">Services</Menu.Item>
      </Link>
      <Link href="/portfolio">
        <Menu.Item className="item small_text">Portfolio</Menu.Item>
      </Link>
      <Link href="/case-studies">
        <Menu.Item className="item small_text">Case Studies</Menu.Item>
      </Link>
      <Link href="#">
        <Menu.Item className="item small_text">Blog</Menu.Item>
      </Link>
      <Link href="#">
        <Menu.Item className="item small_text">0900-1234567</Menu.Item>
      </Link>
      <Link href="#">
        <Menu.Item className="item small_text">
          <Button className="button light_btn">ESTIMATE PROJECT</Button>
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default HeaderMenu;
