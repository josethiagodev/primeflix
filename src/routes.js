import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Erro from "./pages/Erro";
import Favorites from "./pages/Favorites";
import RegisterAccount from "./pages/RegisterAccount";
import LoginAccount from "./pages/LoginAccount";
import Posts from "./pages/Posts";

import Header from "./components/Header";


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/movie/:id" element={ <Movie /> } />

                <Route path="/favorites" element={ <Favorites /> } />
                <Route path="/registeraccount" element={ <RegisterAccount /> } />
                <Route path="/loginAccount" element={ <LoginAccount /> } />

                <Route path="/posts" element={ <Posts /> } />

                <Route path="*" element={ <Erro /> } />
            </Routes>
        </BrowserRouter>
    )
}