
/* components */
import Footer from './Footer';
import Header from './Header';
// import Navigation from '../navigation/Navigation';
/* components */

const Layout = ({children}:any) => {
    return (
        <>
            <Header/>
            {/* <Navigation/> */}
            <main className="bg-slate-50 h-screen">
                {children}
            </main>
            {/* <Footer/> */}
        </>
    )
}
export default Layout;