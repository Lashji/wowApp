import React from "react";
import styled from "styled-components";

const SidebarItem = ({ icon }) => {
  return <img src={`http://localhost:3000/images/classIcons/${icon}`} />;
};

export default SidebarItem;
