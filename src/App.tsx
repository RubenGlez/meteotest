import ThemeProvider from "./providers/ThemeProvider";
import GlobalStyle from "./styles/GlobalStyle";
import MeteoTest from "./containers/MeteoTest";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />

      <MeteoTest />
    </ThemeProvider>
  );
}

export default App;
