import Header from "./Header";
import ImageCarousel from "./ImageCarousel";
import TimeCounter from "./TimeCounter";
import LoveLetter from "./LoveLetter";
import PolaroidImage from "./PolaroidImage";

export default function LoveCounter() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <Header />

      {/* Carrossel de Imagens */}
      <div className="containerTeste">
        <h2>Melhores fotinhas de março</h2>
        <ImageCarousel />
      </div>

      {/* Caixa de Informações */}
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Estamos juntos há:</h1>
        <TimeCounter />

        {/* Texto à esquerda */}
        <LoveLetter />

        {/* Imagem à direita */}
        <PolaroidImage />
      </div>
    </div>
  );
}
