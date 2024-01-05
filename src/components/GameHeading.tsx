import { Heading } from "@chakra-ui/react"
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{gameQuery.platform?.name} {gameQuery.genre?.name} Games</Heading>
  )
}

export default GameHeading