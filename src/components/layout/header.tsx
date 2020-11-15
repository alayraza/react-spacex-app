import React from "react";

const Header = () => {
  return (
    <div className="w-full" style={{ position: "absolute" }}>
      <header className="text-gray-500  body-font w-full">
        <div className="customContainer mx-auto flex flex-wrap p-5 flex-row items-center">
          <span className="flex title-font font-medium items-center text-white  mb-0">
            <span className="ml-3 text-xl">React SpaceX App</span>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
