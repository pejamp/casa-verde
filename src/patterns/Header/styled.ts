import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 10px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  color: #202020;
  font-weight: 700;
  transition: all 0.2s ease;

  &::after {
    content: "/";
    margin: 0 13px;
    color: #202020;
  }

  &:last-child {
    &::after {
      display: none;
    }
  }

  &:hover {
    color: #909090;
  }
`;