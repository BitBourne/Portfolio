import React from 'react'
import { useNavigate  } from "react-router-dom";




function PageCybersecurity() {

  const navigate = useNavigate();


  return (

  <div>    
      <button
        onClick={() => navigate(-1)} // -1 regresa a la página anterior
        className="px-4 mt-20 text-white rounded cursor-pointer"
      >
        ← Volver
      </button>
    <div className="min-h-screen bg-background flex items-center justify-center p-4 text-white">



      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Perfil Ciberseguridad</h1>
        <p className="text-muted-foreground">Próximamente...</p>
      </div>
    </div>
  </div>
  )
}

export default PageCybersecurity