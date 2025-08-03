import { useState } from 'react';
import { LoveCounterMaioJunho, LoveCounterAbril, LoveCounterMarco, LoveCounterJulho } from './components/LoveCounter';

function App() {
  // Inicializa o estado com o mês "Maio/Junho"
  const [mesSelecionado, setMesSelecionado] = useState({ 
    nome: "Julho", 
    componente: <LoveCounterJulho /> 
  });

  const meses = [
    { nome: "Março", componente: <LoveCounterMarco /> },
    { nome: "Abril", componente: <LoveCounterAbril /> },
    { nome: "Maio/Junho", componente: <LoveCounterMaioJunho /> },
    { nome: "Julho", componente: <LoveCounterJulho /> }
  ];

  return (
    <div className="App min-h-screen bg-pink-50">
      {/* Header */}
      <header className="bg-pink-500 p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center text-white">Nosso Livro de Amor</h1>
      </header>

      {/* Menu de meses */}
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-4 my-8">
          {meses.map((mes) => (
            <button
              key={mes.nome}
              onClick={() => setMesSelecionado(mes)}
              className={`px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 ${
                mesSelecionado?.nome === mes.nome
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white transform scale-105'
                  : 'bg-white text-pink-600 hover:bg-pink-100'
              }`}
            >
              {mes.nome}
            </button>
          ))}
        </div>

        {/* Exibe o componente do mês selecionado */}
        {mesSelecionado ? (
          <div className="animate-fadeIn">
            {mesSelecionado.componente}
            <button
              onClick={() => setMesSelecionado(null)}
              className="mx-auto mt-6 block px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full shadow transition"
            >
              ← Voltar para todos os meses
            </button>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-pink-500">Escolha um mês para ver nossas memórias</p>
          </div>
        )}
      </div>

      {/* Estilo de animação */}
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
