import React from "react";

import LoginPage from "./LoginPage";

export default function Login({ title, subtitle, width }) {
  return (
    <div className="d-md-flex login-page justify-content-between">
      {/* {width < 325 ? (
        <div className="d-flex align-item-center py-3 ">
          <div className="mb-hd-bg"></div>
          <div className="px-5">
            <img
              className="logo1"
              src={"../.././images/title_icon.png"}
              alt="logo"
            />
            <img
              className="logo px-2"
              src={"../.././images/app_logo.png"}
              alt="logo"
            />
          </div>
        </div>
      ) : null} */}

      <div className="slide">
       
      </div>
      <LoginPage title={title} subtitle={subtitle} width={width} />
    </div>
  );
}
