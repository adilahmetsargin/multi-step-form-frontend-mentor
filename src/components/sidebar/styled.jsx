import styled, { css } from "styled-components";

const imgUrl = "../../assets/images/bg-sidebar-desktop.svg";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-image: url(${imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
  padding: 24px;
  width: 35%;
  border-radius: 8px;
  background-color: #2986cd;
`;

export const ItemNumber = styled.span`
  width: 36px;
  height: 36px;
  border: 1px solid var(--white);
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${ItemNumber} {
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: var(--magnolia);
        border-color: var(--magnolia);
        color: var(--marine-blue);
      `}
  }
`;

export const ItemBody = styled.div``;
export const ItemSubtitle = styled.h5`
  font-size: 13px;
  text-transform: uppercase;
  opacity: 0.75;
`;
export const ItemTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
`;
