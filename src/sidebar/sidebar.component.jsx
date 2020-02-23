import React, { Component } from "react";
import styled from "styled-components";
import SidebarItem from "./sidebar-item/sidebar-item.component";
import { AppContext } from "../api/AppProvider";

const Container = styled.div`
  background-color: #071d49;
  -webkit-box-shadow: 6px 2px 2px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 2px 2px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 2px 2px -1px rgba(0, 0, 0, 0.75);
  height: 100vh;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(14, 1fr);
  min-height: 95%;
  min-width: 100%;
  margin-top: 20px;
  justify-content: center;
`;

const SideBar = () => {
  return (
    <AppContext.Consumer>
      {({ classIcons }) => {
        console.log(classIcons);
        if (!classIcons) return <Container></Container>;

        let items = classIcons.map(i => <SidebarItem key={i} icon={i} />);
        // items.
        return (
          <Container>
            <ItemContainer>{items}</ItemContainer>
          </Container>
        );
      }}
    </AppContext.Consumer>
  );
};

export default SideBar;
