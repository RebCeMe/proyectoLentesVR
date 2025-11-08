import React, { useState } from 'react';
import {
  Shield,
  Users,
  Lock,
  Glasses,
  Eye,
  Code,
  Gamepad2,
  Smartphone,
  ChevronRight,
} from 'lucide-react';

const SobreNosotros = () => {
  const [comisionSeleccionada, setComisionSeleccionada] = useState(null);

  const comisiones = {
    lentesVR: {
      nombre: 'Comisión 1: Lentes VR',
      subtitulo: 'Proyecto basado en Google Cardboard',
      icono: <Glasses size={48} color="#06b6d4" />,
      descripcion:
        'Proyecto basado en Google "Cardboard", que trata sobre el armado de unos lentes (cascos) de realidad virtual de forma casera y sencilla. Agregamos no solo la decoración de los lentes, sino también una experiencia 3D programada desde cero: un mini juego de terror en el cual el usuario interactúa a través de un joystick.',
      materiales: [
        'Cartón resistente',
        '2 lentes biconvexos de 25 mm de diámetro y 40 mm de distancia focal',
        'Tijera / cúter',
        'Pegamento o cinta fuerte',
        'Velcro o goma elástica (para sujetar el celular)',
        'Plantilla de Google Cardboard',
      ],
      proceso: [
        'Imprimimos la plantilla base del casco',
        'Recortamos cada parte y la pegamos sobre el cartón',
        'Recortamos siguiendo las líneas y doblamos las partes especificadas',
        'Armamos el casco pegando cada parte',
        'Colocamos los lentes en el lugar indicado',
        'Montamos el soporte para celular (pegado o con velcro)',
        'Colocamos una goma elástica para sujetar el casco a la cabeza',
      ],
      programacion: {
        titulo: 'Programación del Videojuego',
        contenido: [
          'Motor: Unity con lenguaje C#',
          'Librerías de Google y GitHub XR Plugin para configuración VR',
          'Integración con Google Cardboard para uso móvil',
          'Character Controller para movimiento y colisiones',
          'Script personalizado para controles de mando PlayStation',
          'Uso de giroscopio y sensores del teléfono',
        ],
      },
    },
    visores3D: {
      nombre: 'Comisión 2: Animación Visual',
      subtitulo: 'Viaje Astral en Realidad Virtual',
      icono: <Eye size={48} color="#3b82f6" />,
      descripcion:
        'Experiencia inmersiva de realidad virtual que consiste en un viaje astral por el espacio, explorando planetas y el cosmos hasta un final trágico donde el usuario es absorbido por un agujero negro. Todo acompañado por la música "Planet Caravan" de Black Sabbath, creando una atmósfera única y envolvente.',
      propositos: [
        'Crear una experiencia visual inmersiva que transporte al usuario a través del espacio',
        'Combinar arte, programación y diseño 3D para generar una narrativa espacial',
        'Demostrar el potencial de Unity para crear animaciones cinematográficas en VR',
      ],
      materiales: [
        'Visores de realidad virtual (Google Cardboard)',
        'Teléfono móvil compatible con VR',
        'Auriculares para la experiencia de audio',
        'Aplicación desarrollada en Unity',
      ],
      programacion: {
        titulo: 'Programación en Unity',
        contenido: [
          'Motor de desarrollo: Unity',
          'Creación del mapa espacial con planetas y estrellas',
          'Diseño de la habitación inicial donde comienza la experiencia',
          'Modelado del espacio exterior y el agujero negro',
          'Timeline de Unity para secuenciar toda la experiencia',
          'Integración de audio: "Planet Caravan" de Black Sabbath',
          'Optimización para dispositivos móviles VR',
        ],
      },
      imagen: 'Com_2.jpeg',
    },
  };

  if (!comisionSeleccionada) {
    return (
      <div className="page-container">
        <div className="fade-in">
          <h1>Sobre Nosotros</h1>

          {/* Imagen del grupo completo */}
          <div
            className="card"
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <img
              src="6toA.jpeg"
              alt="Grupo 6toA"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                marginBottom: '1.5rem',
              }}
            />
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Somos el curso <strong> 6to Informatica </strong> del Instituto
              Tecnológico Florentino Ameghino (ITFA), el cual, gracias a la
              materia de Hardware logramos utlizar la realidad virtual.
            </p>
          </div>

          {/* Selección de comisiones */}
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
            Selecciona una Comisión
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem',
            }}
          >
            {/* Comisión 1 */}
            <div
              className="card"
              style={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 12px 24px rgba(6, 182, 212, 0.3)';
                e.currentTarget.style.borderColor = '#06b6d4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 4px 6px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              onClick={() => setComisionSeleccionada('lentesVR')}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Glasses size={48} color="white" />
                </div>
                <h3 style={{ marginBottom: '1rem' }}>Comisión 1</h3>
                <div
                  className="badge"
                  style={{
                    margin: '0 auto 1rem',
                    justifyContent: 'center',
                    background: '#06b6d4',
                  }}
                >
                  Lentes VR + Videojuego
                </div>
                <p style={{ marginBottom: '1.5rem' }}>
                  Construcción de cascos VR con Google Cardboard y desarrollo de
                  un videojuego de terror interactivo
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    color: '#06b6d4',
                  }}
                >
                  <span style={{ fontWeight: 'bold' }}>Ver más</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>

            {/* Comisión 2 */}
            <div
              className="card"
              style={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 12px 24px rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 4px 6px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              onClick={() => setComisionSeleccionada('visores3D')}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Eye size={48} color="white" />
                </div>
                <h3 style={{ marginBottom: '1rem' }}>Comisión 2</h3>
                <div
                  className="badge"
                  style={{
                    margin: '0 auto 1rem',
                    justifyContent: 'center',
                    background: '#3b82f6',
                  }}
                >
                  Visores 3D
                </div>
                <p style={{ marginBottom: '1.5rem' }}>
                  Visores de realidad virtual y experiencia visual
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    color: '#3b82f6',
                  }}
                >
                  <span style={{ fontWeight: 'bold' }}>Ver más</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Llamado a la acción */}
          <div className="card" style={{ textAlign: 'center' }}>
            <h3>¿Quieres saber más sobre ITFA?</h3>
            <p>Nuestro Instagram:</p>
            <button
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
              onClick={() =>
                window.open('https://www.instagram.com/itfa_ok', '_blank')
              }
            >
              @itfa_ok
            </button>
          </div>
        </div>
      </div>
    );
  }

  const comision = comisiones[comisionSeleccionada];

  return (
    <div className="page-container">
      <div className="fade-in">
        {/* Botón de regreso */}
        <button
          onClick={() => setComisionSeleccionada(null)}
          style={{
            background: 'none',
            border: 'none',
            color: '#06b6d4',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            padding: '0.5rem',
            borderRadius: '8px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)')
          }
          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
        >
          <ChevronRight size={20} style={{ transform: 'rotate(180deg)' }} />
          Volver a Comisiones
        </button>

        {/* Header de la comisión */}
        <div className="card">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem',
            }}
          >
            {comision.icono}
            <div>
              <h1 style={{ margin: 0 }}>{comision.nombre}</h1>
              <p style={{ margin: '0.5rem 0 0 0', color: '#64748b' }}>
                {comision.subtitulo}
              </p>
            </div>
          </div>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            {comision.descripcion}
          </p>
        </div>

        {/* Propósitos (solo para Comisión 2) */}
        {comision.propositos && (
          <div className="card">
            <h2
              style={{
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <Shield size={28} color="#3b82f6" />
              Propósitos del Proyecto
            </h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {comision.propositos.map((proposito, index) => (
                <div key={index} className="alert alert-info">
                  <strong style={{ color: '#3b82f6' }}>• {proposito}</strong>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Materiales */}
        <div className="card">
          <h2 style={{ marginBottom: '1.5rem' }}>Materiales Necesarios</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
            }}
          >
            {comision.materiales.map((material, index) => (
              <div
                key={index}
                className="alert alert-info"
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    minWidth: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background:
                      comisionSeleccionada === 'lentesVR'
                        ? '#06b6d4'
                        : '#3b82f6',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                  }}
                >
                  {index + 1}
                </div>
                <span>{material}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso de construcción (solo para Comisión 1) */}
        {comision.proceso && (
          <>
            <div className="card">
              <h2 style={{ marginBottom: '1.5rem' }}>¿Cómo lo hacemos?</h2>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {comision.proceso.map((paso, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'start',
                    }}
                  >
                    <div
                      style={{
                        minWidth: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background:
                          'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {index + 1}
                    </div>
                    <p
                      style={{
                        margin: 0,
                        paddingTop: '0.5rem',
                        fontSize: '1.05rem',
                      }}
                    >
                      {paso}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Imágenes del proceso de construcción */}
            <div
              className="card"
              style={{
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              }}
            >
              <h3
                style={{
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  color: '#0891b2',
                }}
              >
                Proceso de Construcción
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="Com_1S.jpeg"
                    alt="Construcción de lentes VR - Paso 1"
                    style={{
                      width: '100%',
                      maxHeight: '500px',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="Com_1.jpeg"
                    alt="Construcción de lentes VR - Paso 2"
                    style={{
                      width: '100%',
                      maxHeight: '500px',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Programación (solo para Comisión 1) */}
        {comision.programacion && (
          <>
            <div className="card">
              <h2
                style={{
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <Code
                  size={28}
                  color={
                    comisionSeleccionada === 'lentesVR' ? '#06b6d4' : '#3b82f6'
                  }
                />
                {comision.programacion.titulo}
              </h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                {comisionSeleccionada === 'lentesVR'
                  ? 'Se utilizaron diversas herramientas y librerías para el desarrollo del videojuego de terror interactivo, optimizando el rendimiento y garantizando una experiencia inmersiva.'
                  : 'Se utilizó Unity como motor principal para crear la experiencia espacial inmersiva, combinando elementos visuales, audio y animaciones en tiempo real.'}
              </p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {comision.programacion.contenido.map((item, index) => (
                  <div
                    key={index}
                    className="alert alert-info"
                    style={{
                      borderLeft:
                        comisionSeleccionada === 'lentesVR'
                          ? '4px solid #06b6d4'
                          : '4px solid #3b82f6',
                    }}
                  >
                    <strong
                      style={{
                        color:
                          comisionSeleccionada === 'lentesVR'
                            ? '#06b6d4'
                            : '#3b82f6',
                      }}
                    >
                      • {item}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen de Unity y programación */}
            <div
              className="card"
              style={{
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              }}
            >
              <h3
                style={{
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  color:
                    comisionSeleccionada === 'lentesVR' ? '#0891b2' : '#2563eb',
                }}
              >
                Desarrollo en Unity
              </h3>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={comision.imagen || 'UnityCom_1.jpeg'}
                  alt="Desarrollo en Unity"
                  style={{
                    width: '100%',
                    maxHeight: '500px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
            </div>
          </>
        )}

        {/* Resultado final */}
        <div
          className="card"
          style={{
            background:
              comisionSeleccionada === 'lentesVR'
                ? 'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)'
                : 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>Resultado del Proyecto</h3>
          <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            {comisionSeleccionada === 'lentesVR'
              ? 'Un videojuego funcional, adaptable y de fácil acceso que combina conocimientos de programación, diseño de interacción y uso de hardware.'
              : 'Una experiencia inmersiva que acerca la realidad virtual a las familias de forma accesible y educativa.'}
          </p>
        </div>

        {/* Botón de regreso inferior */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => setComisionSeleccionada(null)}
            className="btn btn-primary"
          >
            Ver Otras Comisiones
          </button>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;


