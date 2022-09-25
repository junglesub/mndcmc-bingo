import React from "react";

import "./ServerBar.scss";

const serverStatus = () => {
  return <span className="red">서버 OFFLINE</span>;
  // return <span className="green">서버 ONLINE</span>;
};

function ServerBar() {
  return (
    <div className="ServerBar">
      <div className="status">{serverStatus()}</div>
      <div className="lastTime">15분전</div>
    </div>
  );
}

export default ServerBar;
