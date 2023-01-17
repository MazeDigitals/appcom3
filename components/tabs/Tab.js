import React from "react";
import { Tabs } from "antd";

const Tab = (props) => {
  const { tabs, defaultKey, children } = props;
  const { TabPane } = Tabs;

  console.log(tabs);
  return (
    <Tabs defaultActiveKey={defaultKey}>
      {tabs?.map((tabb, index) => (
        <TabPane tab={<p className="small_text">{tabb?.name}</p>} key={index}>
          <div className="technologies flex flex_center">
            {tabb?.images?.map((i) => (
              <div className="technology">
                <img src={i?.img} />
                <p className="medium_text">{i?.name}</p>
              </div>
            ))}
          </div>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default Tab;
