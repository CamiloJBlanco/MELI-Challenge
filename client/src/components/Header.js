import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/Grid.scss';
import '../assets/css/Header.scss';
import logo from '../assets/images/Logo_ML.png';

function Header() {
    const history = useHistory();
    const searchRef = React.createRef();
    
    const makeSearch = (e) => {
        e.preventDefault();

        const searchValue = searchRef.current.value;
       
        if(searchValue && searchValue != null){
            history.push('/items?search='+searchValue);
        }
    }
        
    return (
        <header id="header">
            <form className="header-container" onSubmit={makeSearch}>
                <Link to="/">
                    <img className="logo" src={logo} alt="Mercado Libre Argentina" />
                </Link>
                <input type="text" className="input-search" ref={searchRef} placeholder="Nunca dejes de buscar" />
                <button type="submit" className="btn-search" />
            </form>
        </header>
    )
}

export default Header;
