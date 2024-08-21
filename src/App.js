import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Banner img='home'/>
      <Container>
        <h1>Hello World!</h1>
        <p>Olá Mundo! Estou aprendendo React.JS.</p>
      </Container>
      <Footer />
    </>
  );
}

export default App;
