import "./tipoReprodutor.style.css";

import { PlayerButton } from "../index.js";

import Wallpaper from "../../../assets/img/img.svg";

export function TipoReprodutor({ seletor }) {
  const tempoTotalDaMusica = 212;
  const tempoPercorridoDaMusica = 200;

  const reprodutor = {
    1: {
      imagem: Wallpaper,
      titulo: "Acorda Devinho",
      autor: "Banda Rocketseat",
      tempoTotal: tempoTotalDaMusica,
      tempoPercorrido: tempoPercorridoDaMusica,
      tempoRestante: tempoTotalDaMusica - tempoPercorridoDaMusica,
      height: "500px",
      width: "300px",
    },
    2: {
      imagem: Wallpaper,
      titulo: "Acorda Devinho",
      autor: "Banda Rocketseat",
      tempoTotal: tempoTotalDaMusica,
      tempoPercorrido: tempoPercorridoDaMusica,
      tempoRestante: tempoTotalDaMusica - tempoPercorridoDaMusica,
      height: "350px",
      width: "450px",
    },
    3: {
      imagem: Wallpaper,
      titulo: "Acorda Devinho",
      autor: "Banda Rocketseat",
      height: "250px",
      width: "450px",
    },
  };

  return (
    <div
      style={{
        height: reprodutor[seletor].height,
        width: reprodutor[seletor].width,
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
      className="player-style"
    >
      <img
        style={seletor === 1 ? { width: "100%" } : { width: "100px" }}
        src={reprodutor[seletor].imagem}
        alt="Imagem Álbum"
      />

      <div
        style={{
          width: "100%",
          height: "20%",
          textAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <h3>{reprodutor[seletor].titulo}</h3>
        <p>{reprodutor[seletor].autor}</p>
      </div>

      <PlayerButton />

      <div style={{ width: "100%", height: "10px", borderRadius: "20px", overflow: "hidden", position: "relative" }}>
        <div style={{ width: "100%", height: "100%", background: "#D9D9D9", opacity: "0.3", position: "absolute" }}></div>
        <div style={{ width: "50%", height: "100%", background: "#D9D9D9", opacity: "0.8", position: "absolute" }}></div>
      </div>
    </div>
  );
}
