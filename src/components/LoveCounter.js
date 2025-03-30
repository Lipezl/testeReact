import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LoveCounter() {
  const startDate = new Date("2025-01-30T00:00:00");
  const [timeTogether, setTimeTogether] = useState(getTimeTogether());

  function getTimeTogether() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += lastMonth;
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return { years, months, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeTogether(getTimeTogether());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      {/* Header */}
      <header className="w-full bg-pink-400 text-white py-4 shadow-md flex justify-center items-center">
        <h1 className="text-2xl font-bold">Para o amor da minha vida, minha princesa❤️</h1>
      </header>
      <div className="containerTeste">
  <h2>Melhores fotinhas de março</h2>
  {/* Carrossel de imagens */}
  <div className="w-full flex justify-center mt-6 album">
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="swiper"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <SwiperSlide key={i}>
          <img
            src={`/foto${i}.jpg`}
            alt={`Foto ${i}`}
            className="swiper-slide"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>




      {/* Caixa de informações */}
      <div className="container">
      <h1 className="text-3xl font-bold mb-4">Estamos juntos há:</h1>
          <p className="text-xl contador">
            {timeTogether.years > 0 && `${timeTogether.years} ${timeTogether.years === 1 ? "ano" : "anos"}, `}
            {timeTogether.months > 0 && `${timeTogether.months} ${timeTogether.months === 1 ? "mês" : "meses"}, `}
            {timeTogether.days} dias, {timeTogether.hours} horas, {timeTogether.minutes} minutos e {timeTogether.seconds} segundos
          </p>
        {/* Texto à esquerda */}
        <div className="text">
          <h2 className="text-2xl font-semibold mb-4">
            Para o amor da minha vida, <span className="text-pink-400">Minha gatinha, princesa e perfeita ❤️</span>
          </h2>
          <p className="italic text-lg text-pink-200 mb-6">
            "Amor, a 2 meses atrás eu fiz a maior e melhor decisão da minha vida, que eu quero que dure para sempre, essa decisão é de pedir em namoro você, eu lembro a primeira vez que eu te vi, te achei muito linda, isso foi em fevereiro do ano passado, e depois de meses e meses eu pedi para seguir você, e apesar de você não ter me seguido de volta eu não desisti, ai como sempre eu timido, não tive coragem de chegar em você, mas depois de ajudas e as nossas primeiras conversas, teve o primeiro eu te amo, esse dia foi um dos meus melhores dias também, apesar de eu tentar o máximo pra não falar, porque achei que iria ser emocionado KKKKKKKK. Nesse mesmo mês tive minhas primeiras ideias de como pedir você em namoro, e sim eu pensei em pedir em outubro, mas deu tudo errado por eu ser timido, e me arrependo por isso. Enfim chegou o grande mês de Janeiro, eu com a aliança já comprada eu tentava me organizar de como pedir você em namoro, tive ideias como o piquenique, sushi, parque de trampolim e deu tudo errado KKKKKKK, ai tivemos que improvisar um lugar, que me fez o melhor dia da minha vida até hoje, e agora todos os melhores dias da minha vida você vai estar comigo, eu espero. E por fim amor, eu te amo infinito, como nós fala a um tempo KKKKKKK, você é a minha princesa, perfeita, maravilhosa, linda e o aor da minha vida!!" 🌙✨
          </p>

          {/* Contador */}


          <p className="mt-6 text-lg">💖 Para sempre juntos! 💖</p>
        </div>

        {/* Imagem à direita */}
        <div className="image">
          <img src="/profile.jpg" alt="Foto do casal" />
        </div>
      </div>
    </div>
  );
}
