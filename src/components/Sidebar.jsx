import SocialNetworks from './SocialNetworks';
import React from 'react'
import Avatar from '../img/fotoGuto.jpg';
import '../styles/components/sidebar.sass';
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return <aside id='sidebar'>
    <img src={Avatar} alt="Augusto Whitaker" />
    <p className='title'>Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="#" className='btn'>Download currículo</a>
  </aside>
}

export default Sidebar