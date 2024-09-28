import React, { useState, useEffect } from 'react';
import './test.css';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);

  // Simular carga de datos
  useEffect(() => {
    // Aquí puedes reemplazar con tu lógica de obtención de datos
    const fetchUserData = async () => {
      // Simular datos del usuario (esto vendría de tu API en un caso real)
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA',
        specialty: 'Veterinario General',
        avatar: 'https://via.placeholder.com/150'
      };
      setUser(userData);
    };

    fetchUserData();
  }, []);

  // Si los datos aún no están cargados, mostrar un indicador de carga
  if (!user) {
    return <div className="loading">Cargando perfil...</div>;
  }
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img className="profile-avatar" src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
          <h2 className="profile-name">{user.firstName} {user.lastName}</h2>
        </div>
        <div className="profile-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
          <p><strong>Dirección:</strong> {user.address}</p>
          <p><strong>Especialidad:</strong> {user.specialty}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
