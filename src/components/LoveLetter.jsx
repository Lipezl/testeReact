import { useState } from "react";

export function LoveLetterJulho() {
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
            Amor, obrigado pelo esses 6 meses de namoro, você não sabe o quanto me ajuda a ser uma pessoa melhor, faz 1 ano que nos conhecemos e desde então eu já sabia que queria você para sempre ao meu lado. Eu nunca me cansarei de te elogiar e dizer o quaanto você é linda, perfeita, maravilhosa e minha princesa. Esses dias estou com muitas saudades, eu estou escrevendo esse texto e não consigo parar de pensar em você, e como eu quero passar o resto da minha vida ao seu lado. Obrigado por tudo, amor, por ser a namorada incrível e perfeita que você é. Eu te amo muitoooo, e sempre vou te amar, você é a mulher da minha vida e sempre será! 💖
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


export function LoveLetterMaioJunho() {
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

export function LoveLetterMarco() {
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
              Amor, a 2 meses atrás eu fiz a maior e melhor decisão da minha vida, que eu quero que dure para sempre, essa decisão é de pedir em namoro você, eu lembro a primeira vez que eu te vi, te achei muito linda, isso foi em fevereiro do ano passado, e depois de meses e meses eu pedi para seguir você, e apesar de você não ter me seguido de volta eu não desisti, ai como sempre eu timido, não tive coragem de chegar em você, mas depois de ajudas e as nossas primeiras conversas, teve o primeiro eu te amo, esse dia foi um dos meus melhores dias também, apesar de eu tentar o máximo pra não falar, porque achei que iria ser emocionado KKKKKKKK. Nesse mesmo mês tive minhas primeiras ideias de como pedir você em namoro, e sim eu pensei em pedir em outubro, mas deu tudo errado por eu ser timido, e me arrependo por isso. Enfim chegou o grande mês de Janeiro, eu com a aliança já comprada eu tentava me organizar de como pedir você em namoro, tive ideias como o piquenique, sushi, parque de trampolim e deu tudo errado KKKKKKK, ai tivemos que improvisar um lugar, que me fez o melhor dia da minha vida até hoje, e agora todos os melhores dias da minha vida você vai estar comigo, eu espero. E por fim amor, eu te amo infinito, como nós fala a um tempo KKKKKKK, você é a minha princesa, perfeita, maravilhosa, linda e o amor da minha vida!💖
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
  
  export function LoveLetterAbril() {
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
                Feliz 3 meses, amor da minha vida, você é a razão do meu sorriso e da minha felicidade. Eu sou eternamente grato por ter você na minha vida. Você é a luz que ilumina meus dias e o amor que aquece meu coração. eu te amo mais do que palavras podem expressar, como eu disse no primeiro eu te amo que, e é real eu te amo tanto que nem tem como expressar. Nesses últimos meses estou amando estar ao seu lado, e quero continuar sempre. Eu te amo infinito minha princesa, amor da minha vida, razão do meu viver, razão da minha felicidade, a única mulher perfeita que existe nesse universo! 💖
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
