import {Outlet} from 'react-router-dom'
import Header from './Components/header'
import Footer from './Components/footer'

export default function Layout() {
    return (
        <>
            <Header/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </>
    )
}