import React from "react";
import { Items } from "./constants";
import * as S from "./styled";

const Sidebar = ({ activeStep }) => {
  return (
    <S.Sidebar>
      {Items.map((item) => (
        <S.Item key={item.id} isActive={activeStep === item.id}>
          <S.ItemNumber>{item.number}</S.ItemNumber>
          <S.ItemBody>
            <S.ItemSubtitle>{item.subtitle}</S.ItemSubtitle>
            <S.ItemTitle>{item.title}</S.ItemTitle>
          </S.ItemBody>
        </S.Item>
      ))}
    </S.Sidebar>
  );
};

export default Sidebar;
