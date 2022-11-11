import { Paper } from "@mantine/core";
import Cards from "../Components/Cards";

function Home () {
  return (
    <Paper p='md' radius={0} style={{minHeight: "100vh"}}>
        <Cards />
    </Paper>
  );
}

export default Home;