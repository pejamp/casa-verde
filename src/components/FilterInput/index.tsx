import { currencyFormat } from "../../utils/currencyFormat";
import { InputWrapper, Slider, Value } from "./styled";

interface FilterInputProps {
  value: any;
  onChange: (event: any) => void;
}

export function FilterInput(props: FilterInputProps) {
  const price = currencyFormat(props.value);
  
  return (
    <InputWrapper>
      <Slider 
        type="range" 
        name="price" 
        min="0" 
        max="100" 
        value={props.value} 
        onChange={props.onChange} 
        opacity={props.value > 10 ? (props.value / 100) : .1}
        color={'#FFCB47'}
      />
      <Value>{price}</Value>
    </InputWrapper>
  );
}