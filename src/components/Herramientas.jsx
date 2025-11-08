import React, { useState } from 'react';
import {
  Terminal,
  Glasses,
  Code,
  Gamepad2,
  Layers,
  Lightbulb,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';

const Herramientas = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const herramientas = [
    {
      icon: Layers,
      nombre: 'Unity + XR Interaction Toolkit',
      categoria: 'Motor de Juego',
      descripcion:
        'Motor de desarrollo 3D más popular para VR. Incluye XR Interaction Toolkit nativo para manejar controles VR, teleportación, agarre de objetos y más.',
      usoCaso:
        'Aplicaciones VR complejas, juegos, experiencias interactivas, simuladores',
      dificultad: 'Intermedio',
      comandos: [
        {
          id: 1,
          titulo: 'Configurar XR Origin',
          comando: 'GameObject > XR > XR Origin (Action-based)',
          explicacion: 'Crea el sistema de cámara y controles VR en tu escena',
        },
        {
          id: 2,
          titulo: 'Agregar teleportación',
          comando: 'Add Component > Teleportation Provider + Locomotion System',
          explicacion:
            'Sistema de movimiento por teleportación para navegar en VR',
        },
        {
          id: 3,
          titulo: 'Hacer objeto agarrable',
          comando: 'Add Component > XR Grab Interactable',
          explicacion:
            'Permite que el usuario agarre y manipule objetos con los controles',
        },
        {
          id: 4,
          titulo: 'Script básico de interacción',
          comando: `using UnityEngine.XR.Interaction.Toolkit;

public class MyVRObject : MonoBehaviour 
{
    void Start() 
    {
        var grabInteractable = GetComponent<XRGrabInteractable>();
        grabInteractable.selectEntered.AddListener(OnGrab);
    }
    
    void OnGrab(SelectEnterEventArgs args) 
    {
        Debug.Log("Objeto agarrado!");
    }
}`,
          explicacion:
            'Script C# para detectar cuando un objeto es agarrado en VR',
        },
      ],
    },
    {
      icon: Code,
      nombre: 'A-Frame',
      categoria: 'WebVR',
      descripcion:
        'Framework web que permite crear experiencias VR usando HTML. Basado en Three.js, funciona en navegadores y no requiere instalación.',
      usoCaso:
        'Experiencias VR web, galerías 360°, tours virtuales, prototipos rápidos',
      dificultad: 'Básico',
      comandos: [
        {
          id: 5,
          titulo: 'HTML básico de A-Frame',
          comando: `<!DOCTYPE html>
<html>
  <head>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box position="0 1 -3" color="#4CC3D9"></a-box>
      <a-sphere position="2 1 -5" color="#EF2D5E"></a-sphere>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>`,
          explicacion:
            'Escena VR básica con objetos 3D, funciona en cualquier navegador',
        },
        {
          id: 6,
          titulo: 'Agregar interactividad con cursor',
          comando: `<a-camera>
  <a-cursor></a-cursor>
</a-camera>

<a-box 
  position="0 1 -3" 
  color="#4CC3D9"
  event-set__click="color: #8CE8FF">
</a-box>`,
          explicacion:
            'Cursor VR que cambia el color del objeto al hacer click (o mirar)',
        },
        {
          id: 7,
          titulo: 'Imagen/video 360°',
          comando: `<a-scene>
  <a-sky src="panorama.jpg" rotation="0 -130 0"></a-sky>
  <!-- Para video: -->
  <a-videosphere src="video360.mp4"></a-videosphere>
</a-scene>`,
          explicacion:
            'Muestra una imagen o video 360° como fondo de la escena VR',
        },
      ],
    },
    {
      icon: Gamepad2,
      nombre: 'Unreal Engine + VR Template',
      categoria: 'Motor de Juego AAA',
      descripcion:
        'Motor gráfico de alta calidad con plantillas VR predefinidas. Ideal para experiencias fotorrealistas y juegos VR de alto rendimiento.',
      usoCaso:
        'Juegos VR AAA, simuladores realistas, arquitectura virtual, entretenimiento',
      dificultad: 'Avanzado',
      comandos: [
        {
          id: 8,
          titulo: 'Crear proyecto VR',
          comando: 'New Project > Games > Virtual Reality Template',
          explicacion:
            'Crea un proyecto con todo configurado para VR (cámaras, controles, ejemplos)',
        },
        {
          id: 9,
          titulo: 'Blueprint para agarre',
          comando: `Event Grab (Motion Controller)
  → Get Grabbed Component
  → Attach to Component (Hand Socket)`,
          explicacion:
            'Blueprint visual para implementar sistema de agarre de objetos',
        },
        {
          id: 10,
          titulo: 'Activar VR Preview',
          comando: 'Edit > Project Settings > VR Mode > Enable VR Preview',
          explicacion:
            'Permite probar la aplicación directamente en los cascos VR',
        },
      ],
    },
    {
      icon: Terminal,
      nombre: 'Three.js + WebXR',
      categoria: 'Desarrollo Web Avanzado',
      descripcion:
        'Librería JavaScript 3D con soporte WebXR nativo. Mayor control y flexibilidad que A-Frame, pero requiere más código.',
      usoCaso:
        'Aplicaciones web VR personalizadas, visualizaciones de datos 3D, herramientas web',
      dificultad: 'Avanzado',
      comandos: [
        {
          id: 11,
          titulo: 'Inicializar escena VR',
          comando: `import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);
const renderer = new THREE.WebGLRenderer();
renderer.xr.enabled = true;

document.body.appendChild(VRButton.createButton(renderer));
document.body.appendChild(renderer.domElement);`,
          explicacion:
            'Código básico para inicializar una escena 3D con soporte VR',
        },
        {
          id: 12,
          titulo: 'Detectar controles VR',
          comando: `const controller = renderer.xr.getController(0);
controller.addEventListener('selectstart', () => {
  console.log('Gatillo presionado');
});
scene.add(controller);`,
          explicacion:
            'Captura eventos de los controles VR (gatillo, botones, etc)',
        },
      ],
    },
    {
      icon: Sparkles,
      nombre: 'Blender + Exportación VR',
      categoria: 'Modelado 3D',
      descripcion:
        'Software de modelado 3D gratuito para crear assets optimizados para VR. Exporta en formatos compatibles (FBX, glTF).',
      usoCaso: 'Crear modelos 3D, entornos, personajes y objetos para apps VR',
      dificultad: 'Intermedio',
      comandos: [
        {
          id: 13,
          titulo: 'Optimizar modelo para VR',
          comando:
            'Mesh > Decimate Modifier (Ratio: 0.5)\nUV Editing > Smart UV Project\nShading > Bake Textures',
          explicacion:
            'Reduce polígonos, crea UVs y hornea texturas para mejor rendimiento en VR',
        },
        {
          id: 14,
          titulo: 'Exportar para Unity/Unreal',
          comando:
            'File > Export > FBX (.fbx)\nInclude: Armature, Mesh\nApply: Scale, Rotation',
          explicacion:
            'Exporta modelos en formato FBX compatible con motores de juego',
        },
        {
          id: 15,
          titulo: 'Exportar para WebVR',
          comando:
            'File > Export > glTF 2.0 (.glb)\nFormat: Binary (.glb)\nInclude: Materials, Textures',
          explicacion:
            'Exporta en formato glTF optimizado para experiencias VR web',
        },
      ],
    },
  ];

  const consejosPracticos = [
    {
      id: 16,
      titulo: 'Configurar entorno de desarrollo',
      comando:
        '1. Instalar Unity Hub / Unreal Launcher\n2. Descargar SteamVR o Oculus SDK\n3. Conectar cascos VR (Meta Quest, Valve Index, etc)\n4. Verificar drivers y firmware actualizados',
      explicacion: 'Pasos iniciales para empezar a desarrollar aplicaciones VR',
    },
    {
      id: 17,
      titulo: 'Optimización de rendimiento',
      comando:
        '• Mantener 90+ FPS (crucial para evitar mareos)\n• Reducir draw calls y polígonos\n• Usar LOD (Level of Detail)\n• Bake lighting cuando sea posible',
      explicacion:
        'El rendimiento es crítico en VR - estos son los principales factores',
    },
    {
      id: 18,
      titulo: 'Diseño de UX para VR',
      comando:
        '• UI a 1.5-2m de distancia del usuario\n• Texto mínimo 24pt de tamaño\n• Evitar movimiento rápido de cámara\n• Incluir opciones de comfort (viñeta, teleportación)',
      explicacion: 'Principios básicos para crear experiencias VR cómodas',
    },
    {
      id: 19,
      titulo: 'Testing en cascos VR',
      comando:
        'Unity: VR Preview Button\nUnreal: VR Preview Mode (Alt+P)\nWebVR: Chrome/Firefox con extensión WebXR Emulator',
      explicacion: 'Cómo probar tu aplicación directamente en los cascos VR',
    },
    {
      id: 20,
      titulo: 'Recursos de aprendizaje',
      comando:
        '• Unity Learn: XR Development Pathway\n• Oculus Developer Hub: Documentación oficial\n• Valem Tutorials (YouTube): Tutoriales VR\n• WebXR Samples: Ejemplos de código WebVR',
      explicacion: 'Mejores recursos gratuitos para aprender desarrollo VR',
    },
    {
      id: 21,
      titulo: 'Publicar tu aplicación',
      comando:
        'Meta Quest Store: developer.oculus.com\nSteam VR: partner.steamgames.com\nSideQuest: sidequestvr.com (distribución indie)\nWeb: Hospedar en servidor HTTPS',
      explicacion: 'Plataformas donde puedes publicar tus aplicaciones VR',
    },
  ];

  return (
    <div className="page-container">
      <div className="fade-in">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-6">
            <Glasses size={16} />
            Desarrollo VR
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Herramientas para Crear Apps VR
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Aprende a desarrollar aplicaciones y experiencias inmersivas para
            cascos de realidad virtual con las mejores herramientas del mercado.
          </p>
        </div>

        {/* Info importante */}
        <div className="alert alert-warning max-w-4xl mx-auto mb-12">
          <div
            style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
          >
            <Lightbulb size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '1.1rem',
                }}
              >
                Requisitos para Desarrollo VR
              </strong>
              <p style={{ marginBottom: 0 }}>
                Necesitarás: PC con GPU dedicada (GTX 1060+), cascos VR (Meta
                Quest, Valve Index, etc), y conocimientos básicos de
                programación (C#, JavaScript o Blueprints). Algunas opciones
                como WebVR funcionan en navegador sin instalación.
              </p>
            </div>
          </div>
        </div>

        {/* Herramientas principales */}
        <h2 className="text-center text-3xl mb-10">
          Plataformas de Desarrollo VR
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {herramientas.map((herramienta, index) => {
            const Icon = herramienta.icon;
            const dificultadColor =
              herramienta.dificultad === 'Básico'
                ? '#22c55e'
                : herramienta.dificultad === 'Intermedio'
                ? '#eab308'
                : '#ef4444';

            return (
              <div
                key={index}
                className="card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div className="relative">
                    <Icon className="w-12 h-12 text-cyan-400" />
                    <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-20"></div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="text-2xl font-bold mb-1">
                      {herramienta.nombre}
                    </h3>
                    <div
                      style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    >
                      <span className="badge" style={{ fontSize: '0.85rem' }}>
                        {herramienta.categoria}
                      </span>
                      <span
                        className="badge"
                        style={{
                          fontSize: '0.85rem',
                          borderColor: dificultadColor,
                          color: dificultadColor,
                          background: `${dificultadColor}15`,
                        }}
                      >
                        {herramienta.dificultad}
                      </span>
                    </div>
                  </div>
                </div>

                <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                  {herramienta.descripcion}
                </p>

                <div
                  className="alert alert-info"
                  style={{ marginBottom: '1.5rem' }}
                >
                  <strong>Ideal para:</strong> {herramienta.usoCaso}
                </div>

                <h4
                  style={{
                    color: '#22d3ee',
                    marginBottom: '1rem',
                    fontSize: '1.1rem',
                  }}
                >
                  📝 Guía de uso:
                </h4>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {herramienta.comandos.map((cmd) => (
                    <div
                      key={cmd.id}
                      style={{
                        background: 'rgba(15, 23, 42, 0.6)',
                        border: '1px solid rgba(6, 182, 212, 0.2)',
                        borderRadius: '8px',
                        padding: '1rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <strong
                          style={{ color: '#22d3ee', fontSize: '0.95rem' }}
                        >
                          {cmd.titulo}
                        </strong>
                        <button
                          onClick={() => copyToClipboard(cmd.comando, cmd.id)}
                          style={{
                            background: 'transparent',
                            border: '1px solid rgba(6, 182, 212, 0.3)',
                            borderRadius: '6px',
                            padding: '0.5rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#06b6d4',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              'rgba(6, 182, 212, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          {copiedCode === cmd.id ? (
                            <>
                              <Check size={16} />
                              <span style={{ fontSize: '0.85rem' }}>
                                Copiado!
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy size={16} />
                              <span style={{ fontSize: '0.85rem' }}>
                                Copiar
                              </span>
                            </>
                          )}
                        </button>
                      </div>

                      <code
                        style={{
                          display: 'block',
                          background: '#0f172a',
                          padding: '0.75rem',
                          borderRadius: '6px',
                          fontFamily: 'Courier Prime, monospace',
                          fontSize: '0.9rem',
                          color: '#22d3ee',
                          marginBottom: '0.5rem',
                          overflowX: 'auto',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        {cmd.comando}
                      </code>

                      <p
                        style={{
                          margin: 0,
                          fontSize: '0.9rem',
                          color: '#94a3b8',
                          fontStyle: 'italic',
                        }}
                      >
                        💡 {cmd.explicacion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Consejos prácticos */}
        <div style={{ marginTop: '4rem' }}>
          <h2 className="text-center text-3xl mb-4">
            Consejos Prácticos y Recursos
          </h2>
          <p className="text-center text-slate-400 mb-10 max-w-3xl mx-auto">
            Información esencial para empezar a desarrollar en VR
          </p>

          <div className="card">
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {consejosPracticos.map((cmd) => (
                <div
                  key={cmd.id}
                  style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    borderRadius: '8px',
                    padding: '1rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <strong style={{ color: '#22d3ee', fontSize: '0.95rem' }}>
                      {cmd.titulo}
                    </strong>
                    <button
                      onClick={() => copyToClipboard(cmd.comando, cmd.id)}
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#06b6d4',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          'rgba(6, 182, 212, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {copiedCode === cmd.id ? (
                        <>
                          <Check size={16} />
                          <span style={{ fontSize: '0.85rem' }}>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span style={{ fontSize: '0.85rem' }}>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  <code
                    style={{
                      display: 'block',
                      background: '#0f172a',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      fontFamily: 'Courier Prime, monospace',
                      fontSize: '0.9rem',
                      color: '#22d3ee',
                      marginBottom: '0.5rem',
                      overflowX: 'auto',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {cmd.comando}
                  </code>

                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.9rem',
                      color: '#94a3b8',
                      fontStyle: 'italic',
                    }}
                  >
                    💡 {cmd.explicacion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herramientas;
