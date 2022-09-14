import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import { IPokemonSimple } from "../../redux/interface";

type Props = {
  data: IPokemonSimple[];
};

function Pokemons({ data }: Props) {
  return (
    <>
        {data.map((el, index: number) => (
          <TableRow key={index}>
            <TableCell>{index+1}</TableCell>
            <TableCell>{el.name}</TableCell>
            <TableCell>{el.url}</TableCell>
          </TableRow>
        ))}
    </>
  );
}

export default Pokemons;
