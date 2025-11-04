import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import "./Bilder.css";

const images = [
  "/assets/Rebelbild1.jfif",
  "/assets/Rebelbild2.jfif",
  "/assets/Rebelbild3.jfif",
  "/assets/Rebelbild4.jfif",
  "/assets/Rebelbild5.jfif",
  "/assets/Rebelbild6.jfif",
  "/assets/Rebelbild7.jfif",
  "/assets/Rebelbild9.jfif",
  "/assets/Rebelbild10.jfif",
  "/assets/Rebelbild11.jfif",
  "/assets/Rebelbild12.jfif",
  "/assets/Rebelbild13.jfif",
  "/assets/Rebelbild14.jfif",
  "/assets/Rebelbild15.jfif",
  "/assets/Rebelbild16.jfif",
];

export default function Bilder() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bilder-page">
      <h1>Bilder från gymmet</h1>
      <p className="intro-text">
      Upptäck våra ljusa lokaler, moderna maskiner och inspirerande detaljer som gör varje pass lite bättre! 💪
      </p>

      <div className="image-grid">
        {images.map((src, i) => (
          <div
            key={i}
            className="image-item"
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Bild ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          images={images.map((src) => ({ url: src }))}
          startIndex={images.indexOf(selectedImage)}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}