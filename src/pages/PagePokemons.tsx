import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemonSimple } from "../redux/interface";
import Pokemons from "./components/Pokemons";

function PagePokemons() {
  const [pokemonList, setPokemonList] = useState<IPokemonSimple[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");

  useEffect(() => {
    loadData("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  function loadData(url: string) {
    axios.get(url).then((res) => {
      console.log(res.data);
      setPokemonList([...pokemonList, ...res.data.results]);
      setNextUrl(res.data.next);
    });
  }

  function handleLoad() {
    loadData(nextUrl);
  }

  return (
    <div>
      <h1>Pokemon List</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Pokemon</TableCell>
            <TableCell>Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <Pokemons data={pokemonList} />
        </TableBody>
      </Table>
      <Button variant="contained" onClick={handleLoad}>Load more...</Button>
    </div>
  );
}

export default PagePokemons;
