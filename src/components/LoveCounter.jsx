import Header from "./Header";
import { ImageCarouselMaioJunho, ImageCarouselAbril, ImageCarouselMarco, ImageCarouselJulho, ImageCarouselAgosto, ImageCarouselSetembro } from "./ImageCarousel";
import TimeCounter from "./TimeCounter";
import { LoveLetterMaioJunho, LoveLetterMarco, LoveLetterAbril, LoveLetterJulho, LoveLetterAgosto, LoveLetterSetembro } from "./LoveLetter";
import PolaroidImage from "./PolaroidImage";

export function LoveCounterSetembro() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <Header />
      {/* Carrossel de Imagens */}
      <div className="containerTeste">
        <h2>Melhores fotinhas de Setembro</h2>
        <ImageCarouselSetembro />
      </div>

      {/* Caixa de Informações */}
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Estamos juntos há:</h1>
        <TimeCounter />

        {/* Texto à esquerda */}
        <LoveLetterSetembro />

        {/* Imagem à direita */}
        <PolaroidImage />
      </div>
    </div>
  );
}

export function LoveCounterAgosto() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <Header />
      {/* Carrossel de Imagens */}
      <div className="containerTeste">
        <h2>Melhores fotinhas de Agosto</h2>
        <ImageCarouselAgosto />
      </div>

      {/* Caixa de Informações */}
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Estamos juntos há:</h1>
        <TimeCounter />

        {/* Texto à esquerda */}
        <LoveLetterAgosto />

        {/* Imagem à direita */}
        <PolaroidImage />
      </div>
    </div>
  );
}

export function LoveCounterJulho() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <Header />
      {/* Carrossel de Imagens */}
      <div className="containerTeste">
        <h2>Melhores fotinhas de Julho</h2>
        <ImageCarouselJulho />
      </div>

      {/* Caixa de Informações */}
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Estamos juntos há:</h1>
        <TimeCounter />

        {/* Texto à esquerda */}
        <LoveLetterJulho />

        {/* Imagem à direita */}
        <PolaroidImage />
      </div>
    </div>
  );
}

export function LoveCounterMaioJunho() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <Header />
      {/* Carrossel de Imagens */}
      <div className="containerTeste">
        <h2>Melhores fotinhas de maio/junho</h2>
        <ImageCarouselMaioJunho />
      </div>

      {/* Caixa de Informações */}
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Estamos juntos há:</h1>
        <TimeCounter />

        {/* Texto à esquerda */}
        <LoveLetterMaioJunho />

        {/* Imagem à direita */}
        <PolaroidImage />
      </div>
    </div>
  );
}
export function LoveCounterAbril() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <Header />
      {/* Carrossel de Imagens */}
      <div className="containerTeste">
        <h2>Melhores fotinhas de Abril</h2>
        <ImageCarouselAbril />
      </div>

      {/* Caixa de Informações */}
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Estamos juntos há:</h1>
        <TimeCounter />

        {/* Texto à esquerda */}
        <LoveLetterAbril />

        {/* Imagem à direita */}
        <PolaroidImage />
      </div>
    </div>
  );
}
export function LoveCounterMarco() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <Header />
      {/* Carrossel de Imagens */}
      <div className="containerTeste">
        <h2>Melhores fotinhas de Março</h2>
        <ImageCarouselMarco />
      </div>

      {/* Caixa de Informações */}
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Estamos juntos há:</h1>
        <TimeCounter />

        {/* Texto à esquerda */}
        <LoveLetterMarco />

        {/* Imagem à direita */}
        <PolaroidImage />
      </div>
    </div>
  );
}