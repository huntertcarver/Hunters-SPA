import { Paper } from "@mantine/core";
import Ripple from "../Components/Ripple";

export default function Test(){
    return (
        <Paper style={{height: '100vh', boxSizing: 'border-box', overflow: 'hidden'}}>
            <Ripple />
        </Paper>
    );
}