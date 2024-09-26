import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

export const Profile = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login'); // Redirige a login después de hacer logout
  };

  return (
    <div className='datosUsuario'>
      <div>
        <img src='./usuario.jpg' alt='foto-del-usuario' className='usuarioImg'/>
      </div>
      <div className='usuarioTexto'>
        <p style={{ marginBottom: '0px' }}><span style={{ fontWeight: 'bold' }}>Usuario: </span> Superior_zoo</p>
        <p><span style={{ fontWeight: 'bold', paddingRight: '16px' }}>Email:</span> Ren_michigan@gmail.com</p>
        <Button variant="dark" style={{ marginTop: '10px' }} onClick={handleLogout}>Cerrar sesión</Button>
      </div>
    </div>
  );
}

export default Profile;