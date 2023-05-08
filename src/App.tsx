import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Layout/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav"  >
         <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          sidebar
        </GridItem>
      </Show>
      <GridItem area="main">
        main
        {/* <Box paddingLeft={2}>
      <GameHeading gameQuery={gameQuery} />
      <Flex marginBottom={5}>
        <Box marginRight={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform}) } />
        </Box>
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
      </Flex>
    </Box> */}
        {/* <GameGrid gameQuery={gameQuery} /> */}
      </GridItem>
    </Grid>
  );
}

export default App;
