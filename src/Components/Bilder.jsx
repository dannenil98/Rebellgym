import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Bilder.css";

const images = [
  "/assets/gym-hero.jpg",
  "/assets/gym-cardio.jpg",
  "/assets/gym-power.jpg",
  "/assets/gym-dumbbells.jpg",
  "/assets/gym-floor.jpg",
  "/assets/gym-lobby.jpg",
  "/assets/gym-logo.jpg",
];

export default function Bilder() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="bilder-page">
      <h1>Bilder från gymmet</h1>
      <p className="intro-text">
        Upptäck våra ljusa lokaler, moderna maskiner och inspirerande detaljer som gör varje pass lite bättre!
      </p>

      <div className="image-grid">
        {images.map((src, i) => (
          <div key={i} className="image-item" onClick={() => setIndex(i)}>
            <img src={src} alt={`Bild ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {index >= 0 && (
        <Lightbox
          slides={images.map((src) => ({ src }))}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      )}
    </div>
  );
}
