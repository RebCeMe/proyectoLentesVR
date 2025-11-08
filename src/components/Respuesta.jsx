/* Respuesta.jsx */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Send, Sparkles, ArrowLeft } from 'lucide-react';

const Respuesta = ({ content, isLoading, userQuestion, onAskQuestion }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      onAskQuestion(newQuestion);
      setNewQuestion('');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="page-container">
      <div className="fade-in">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <button
            onClick={handleBack}
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <ArrowLeft size={20} />
            Volver
          </button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flex: 1,
            }}
          >
            <Shield size={40} color="#06b6d4" />
            <div>
              <h1 style={{ margin: 0, fontSize: '2rem' }}>Martita</h1>
              <p style={{ margin: 0, color: '#22d3ee', fontSize: '0.9rem' }}>
                {' '}
                IA de VR
              </p>
            </div>
          </div>
        </div>

        {/* Pregunta del usuario */}
        {userQuestion && (
          <div
            className="card"
            style={{ background: 'rgba(6, 182, 212, 0.1)' }}
          >
            <div
              style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
            >
              <div
                style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
                U
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ color: '#22d3ee' }}>Tu pregunta:</strong>
                <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  {userQuestion}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Respuesta de la IA */}
        <div className="card">
          <div
            style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
          >
            <Shield size={40} color="#06b6d4" style={{ minWidth: '40px' }} />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <strong style={{ color: '#22d3ee', fontSize: '1.1rem' }}>
                  Respuesta de Marta
                </strong>
                {isLoading && (
                  <Sparkles
                    size={20}
                    color="#06b6d4"
                    style={{ animation: 'pulse 1.5s infinite' }}
                  />
                )}
              </div>

              {isLoading && !content && (
                <div className="alert alert-info">
                  <p style={{ marginBottom: 0 }}>
                    🤔 Analizando tu pregunta...
                  </p>
                </div>
              )}

              {content ? (
                <div
                  style={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.8',
                    fontSize: '1.05rem',
                  }}
                >
                  {content}
                  {isLoading && (
                    <span
                      style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '20px',
                        background: '#06b6d4',
                        marginLeft: '4px',
                        animation: 'blink 1s infinite',
                      }}
                    />
                  )}
                </div>
              ) : (
                !isLoading && (
                  <p style={{ color: '#94a3b8' }}>
                    Haz una pregunta para descubrir mas de este mundo virtual.
                  </p>
                )
              )}
            </div>
          </div>
        </div>

        {/* Formulario para nueva pregunta */}
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>
            <Sparkles
              size={24}
              style={{ display: 'inline', marginRight: '0.5rem' }}
            />
            Haz otra pregunta
          </h3>
          <form onSubmit={handleSubmit}>
            <div
              style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}
            >
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Pregunta sobre ciberseguridad, amenazas, protección de datos..."
                style={{
                  width: '100%',
                  minHeight: '100px',
                  padding: '1rem',
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                  fontSize: '1rem',
                  fontFamily: 'Roboto, sans-serif',
                  resize: 'vertical',
                }}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  width: 'fit-content',
                }}
                disabled={isLoading || !newQuestion.trim()}
              >
                <Send size={20} />
                {isLoading ? 'Procesando...' : 'Enviar Pregunta'}
              </button>
            </div>
          </form>
        </div>

        {/* Sugerencias */}
        <div className="card" style={{ background: 'rgba(6, 182, 212, 0.05)' }}>
          <h3>💡 Preguntas sugeridas:</h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginTop: '1rem',
            }}
          >
            {[
              '¿Que es la realidad virtual?',
              '¿Pära que se usa la realidad virtual?',
              '¿De que escuela son?',
              '¿Cual es el proyecto de la comision 1??',
              '¿Cual es el proyecto de la comision 2?',
            ].map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setNewQuestion(suggestion);
                  onAskQuestion(suggestion);
                }}
                className="badge"
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                disabled={isLoading}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(6, 182, 212, 0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(6, 182, 212, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Respuesta;
