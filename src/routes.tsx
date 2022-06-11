// import routes components and use swtich 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  App  from "./App";
import { EditorialPage } from './components/editorial-page';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <App/> } />
                <Route path="/editorial" element = { <EditorialPage/> } />
            </Routes>
        </BrowserRouter>
        );
    }

