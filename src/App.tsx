import TextType from "./components/TextType";
import MagicBento from "./components/MagicBento";
// import GlitchText from "./components/GlitchText";
// import ShinyText from "./components/ShinyText";
import FuzzyText from "./components/FuzzyText";
import "./App.css";

function App() {
  return (
    <>
      {/* Text Type with logo */}
      <div className="pt-4 flex justify-center items-center">
        <img src="/logo.svg" className="size-10" />
        <TextType
          text={[
            "Hai Siswa-Siswi SMK PL Tarcisius!",
            "Kelas XII AKL dan XII MPLB",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>

      {/* Magic Bento */}
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />

      <footer className="m-4 p-3">
        <FuzzyText>
          Copyright © 2025 Johanes Arya Pramesta Nugraha, S.Ak., S.Kom
        </FuzzyText>
      </footer>
    </>
  );
}

export default App;
