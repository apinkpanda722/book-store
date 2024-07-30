import Header from "../common/Header";
import Footer from "../common/Footer";
import { styled } from "styled-components";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <Header />
            <LayoutStyle>{children}</LayoutStyle>
            <Footer />
        </>
    )
}

const LayoutStyle = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: ${({theme}) => theme.layout.width.large};
    padding: 20px 0;
`

export default Layout;