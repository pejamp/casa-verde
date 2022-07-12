import { SelectOption, SelectWrapper } from "./styled";

export function Select(props: {onChange: (event: any) => void}) {
  return (
    <SelectWrapper onChange={props.onChange}>
      <SelectOption value="">--</SelectOption>
      <SelectOption value="price-ascending">Menor preço</SelectOption>
      <SelectOption value="price-descending">Maior preço</SelectOption>
      <SelectOption value="name-ascending">A - Z</SelectOption>
      <SelectOption value="name-descending">Z - A</SelectOption>
    </SelectWrapper>
  );
}