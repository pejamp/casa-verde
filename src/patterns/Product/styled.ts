import styled from "styled-components";

export const Container = styled.article`
  padding: 1.6875rem;
  padding-left: 50%;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  height: 200px;
  box-sizing: border-box;
`;
export const Content = styled.div`
  position: relative;
  z-index: 2;
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
`;

export const Link = styled.a`
  color: #FFCB47;
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  gap: 1rem;
`;

export const Icon = styled.span`
  display: inline-block;
  width: 0.875rem;
  height: 0.875rem;
  background-size: contain;
  background-image: url(/assets/seta.svg);
  background-repeat: no-repeat;
`;