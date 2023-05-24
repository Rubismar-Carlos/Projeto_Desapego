import Navbar from "<prefix>/components/Navbar";

export default function Layout({ children }) {
    return <>
        < Navbar />
        {children}
    </>
}