import styled, { css } from "styled-components";

export const Box = styled.article`
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 14rem;
  width: 995px;
  height: 440px;
  background-color: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`;

export const Content = styled.div`
  padding: 0 1.5rem;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Item = styled.li`
  font-size: 1.375rem;
  display: flex;
  align-items: center;
`;

interface IconProps {
  icon: 'mouse' | 'cart' | 'truck';
}

export const Icon = styled.span<IconProps>`
  display: block;
  margin-right: 1rem;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  background-color: #FFCB47;
  background-size: 1.375rem;
  background-repeat: no-repeat;
  background-position: center;

  ${props => props.icon === 'mouse' && css`
    background-image: url(/assets/mouse.svg);
  `}
  ${props => props.icon === 'cart' && css`
    background-image: url(/assets/cart.svg);
  `}
  ${props => props.icon === 'truck' && css`
    background-image: url(/assets/truck.svg);
  `}
`;