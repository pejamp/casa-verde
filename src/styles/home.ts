import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  background-image: url(/assets/images/image-hero.png);
  background-repeat: no-repeat;
  background-position: right 3rem top -2rem;
  background-size: auto;
  padding-bottom: 9.375rem;
`;

export const Section = styled.section`
  margin-top: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 379px);
  gap: 2rem;
`;