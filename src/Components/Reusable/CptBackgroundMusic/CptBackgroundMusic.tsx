import { useRef, useState, useEffect } from "react";

const CptBackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // 30% de volumen
    }
  }, []);

  const toggleAudio = async (): Promise<void> => {
    if (!audioRef.current) return;

    try {
      if (audioEnabled) {
        audioRef.current.pause();
        setAudioEnabled(false);
      } else {
        await audioRef.current.play();
        setAudioEnabled(true);
      }
    } catch (error) {
      console.log("Error controlando audio:", error);
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={toggleAudio}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            padding: "12px 24px",
            background: audioEnabled
              ? "rgba(220, 53, 69, 0.15)"
              : "rgba(0, 123, 255, 0.15)",
            color: audioEnabled ? "#dc3545" : "#007bff",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {audioEnabled ? "🔇 Silenciar" : "🎵 Activar Sonido"}
          </span>

          {/* Efecto de overlay al hacer hover */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
              borderRadius: "25px",
            }}
          />
        </button>
      </div>

      <audio ref={audioRef} loop>
        <source src="/music/paola_15.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default CptBackgroundMusic;
