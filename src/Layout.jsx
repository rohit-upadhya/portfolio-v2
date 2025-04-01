import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-8 py-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}