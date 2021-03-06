import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo2 from '../../assets/images/logo2.png';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        {/* <img src={logo2} alt="Shop Online" /> */}
        <h1 style={{color:"white",textDecoration:"none"}}>Shop It</h1>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
