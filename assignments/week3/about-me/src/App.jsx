import AboutMe from './components/AboutMe'; // ✅ no curly braces

export default function App() {
  return (
    <div>
      <AboutMe
        name="Nikita"
        age={21}
        hobby="Capturing beautiful moments in my tiny camera"
      />
    </div>
  );
}
