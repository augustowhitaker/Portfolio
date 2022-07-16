import SocialNetworks from './SocialNetworks';
import React from 'react'
import Avatar from '../img/fotoGuto.jpg';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return <aside id='sidebar'>
    <img src={Avatar} alt="Augusto Whitaker" />
    <p className='title'>Desenvolvedor</p>
    <SocialNetworks />
    <p>informações de contato</p>
    <a href="#" className='btn'>Download currículo</a>
  </aside>
}

export default Sidebar