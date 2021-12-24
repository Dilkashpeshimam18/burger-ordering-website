
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to ="/">Burger</NavLink>
            </Nav>
            <NavIcon oClick={toggle}>
                <p>Menu</p>
                <Bars />
            </NavIcon>
        </>
    );
    
};

export default Navbar;


