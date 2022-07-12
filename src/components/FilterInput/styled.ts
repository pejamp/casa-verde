import styled from "styled-components";

interface SliderProps {
  opacity: number;
  color: any;
}

const sliderThumbStyles = (props: any) => (`
  width: 12px;
  height: 12px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #202020;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`);

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #202020;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Slider = styled.input<SliderProps>`
  flex: 1;
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 5px;
  background: #fff;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    ${props => sliderThumbStyles(props)}
  }

  &::-moz-range-thumb {
    ${props => sliderThumbStyles(props)}
  }
`;

export const Value = styled.div`
  width: 100px;
  font-size: 1rem;
`;