import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    Navigate,
    useLocation
} from "react-router-dom";
import { Suspense, lazy } from 'react';
import Login from '../components/auth/Login';
import Home from '../components/home';
import PrivateRoute from './PrivateRoute';
import Tetris from "../pages/tetris";
import Pokemon from "../pages/pokemon";
import Game2048 from "../pages/2048";
import Snake from "../pages/snake";
import Millionaire from "../pages/millionaire";

export const MainRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="auth/login" element={<Login />} />
                <Route path='/' element={<PrivateRoute/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/games/tetris' element={<Tetris/>}/>
                    <Route path='/games/pokemon' element={<Pokemon/>}/>
                    <Route path='/games/2048' element={<Game2048/>}/>
                    <Route path='/games/snake' element={<Snake/>}/>
                    <Route path='/games/millionaire' element={<Millionaire/>}/>
                </Route>
            </Routes>
        </Router>
    );
};