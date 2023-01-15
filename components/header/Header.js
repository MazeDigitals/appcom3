import { Button, Drawer, Layout } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { MenuOutlined } from "@ant-design/icons";
const Header = () => {
  const [show, setShow] = useState(false);

  const showDrawer = () => {
    setShow(true);
  };

  const closeDrawer = () => {
    setShow(false);
  };

  return (
    <Layout.Header>
      <div className="container">
        <div className="header">
          <Link href="/">
            <div className="logo">
              <img src="svg/logo.svg" />
            </div>
          </Link>

          <div>
            <Button
              className="menubtn"
              type="primary"
              shape="circle"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            ></Button>

            <Drawer
              title={<Link href="/">{<img src="svg/logo.svg" />}</Link>}
              placement="right"
              className="mobile_drawer"
              onClose={closeDrawer}
              open={show}
            >
              <div className="mobile_menu">
                <HeaderMenu />
              </div>
            </Drawer>
            <div className="desktop_menu">
              <HeaderMenu />
            </div>
          </div>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
