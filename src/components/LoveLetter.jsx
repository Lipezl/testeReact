import { useState } from "react";

export default function LoveLetter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center mt-6">
      {/* Botão */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-white text-pink-600 font-semibold border border-pink-300 px-6 py-2 rounded-full shadow-md hover:bg-pink-100 transition duration-300 ease-in-out botao"
      >
        💌 {open ? "Fechar cartinha" : "Abrir cartinha"}
      </button>

      {/* Cartinha */}
      {open && (
        <div className="mt-8 max-w-2xl bg-white border border-pink-200 rounded-2xl shadow-xl p-8 font-serif text-gray-800 transition-all duration-500 animate-fade-in carta">
          <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
            Para o amor da minha vida, <br />
            <span className="text-pink-400">
              minha gatinha, princesa e perfeita ❤️
            </span>
          </h2>
          <p className="text-lg italic leading-relaxed">
              Você é a razão do meu sorriso, a luz de todos os meus dias e o amor da minha vida, por mim sempre será tudo isso e muito mais! Feliz 5 meses de namoro, que venha muito mais meses, anos e uma vida inteira juntos! Desde o primeiro dia que te vi, sabia que você era a pessoa que eu queria construir uma vida ao seu lado. E daqui alguns dias fazemos 1 ano desde a nossa primeira conversa, lembro até hoje como foi especial a sua mensagem. Desde então você é a mulher da minha vida, a mulher que eu amo mais do que tudo nesse mundo. Por fim obrigado por ser a namorada incrivel que você é, e sim tem momentos que eu fico triste com você, e vice versa, mas isso é normal, o que importa é nós aprendermos e não repetirmos os mesmos erros. Mas esse mês como nós tinhamos falado vai ser um mês que iremos melhorar, e não só no relacionamento, mas também em nossas vidas, e tenho certeza que vamos conseguir. Eu te amo mais do que tudo nesse mundo, e sempre vou te amar, você é a mulher da minha vida e sempre será! 💖
          </p>
          <p className="mt-6 text-center text-lg font-semibold text-pink-500">
            💖 Para sempre juntos! 💖
          </p>
        </div>
      )}

      {/* Estilo de animação fade-in */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
