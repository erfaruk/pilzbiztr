import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home.jsx"

function App(){
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
        </Routes>
    );
}
export default App;
