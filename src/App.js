import { useState } from 'react';
import { LoveCounterMaioJunho, LoveCounterAbril, LoveCounterMarco, LoveCounterJulho, LoveCounterAgosto, LoveCounterSetembro } from './components/LoveCounter';

function App() {
  const [mesSelecionado, setMesSelecionado] = useState({ 
    nome: "Setembro", 
    componente: <LoveCounterSetembro /> 
  });

  const meses = [
    { nome: "Março", componente: <LoveCounterMarco /> },
    { nome: "Abril", componente: <LoveCounterAbril /> },
    { nome: "Maio/Junho", componente: <LoveCounterMaioJunho /> },
    { nome: "Julho", componente: <LoveCounterJulho /> },
    { nome: "Agosto", componente: <LoveCounterAgosto /> },
    { nome: "Setembro", componente: <LoveCounterSetembro /> }
  ];

  return (
    <div className="App min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white font-serif">
          Nosso Livro de Amor
        </h1>
      </header>

      {/* Menu de meses */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 my-8">
          {meses.map((mes) => (
            <button
              key={mes.nome}
              onClick={() => setMesSelecionado(mes)}
              className={`w-full sm:w-auto px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 ${
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
              className="mx-auto mt-6 block w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
