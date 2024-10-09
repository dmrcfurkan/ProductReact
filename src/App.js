import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Title } from "./components/Title/Title.jsx";
import { Filter } from "./components/Filter/Filter.jsx";
import { Create } from "./components/Create/Create.jsx";
import { Outlet } from "react-router-dom";
import { LoadingProvider, loadingContext } from "./context/loader.js";
import { useContext } from "react";

function App() {
  const { loading } = useContext(loadingContext);
  return (
    <LoadingProvider>
      {loading ? (
        <h1>Loading!!!</h1>
      ) : (
        <>
          <div className="App">
            <Header> Log in </Header>
            <Title />
            <div className="filter-create">
              <Filter />
              <Create />
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </>
      )}
    </LoadingProvider>
  );
}

export default App;

/**
 * her şey çalışıcak (detail felan)
 * index.js lerden export edilicek (servisler componentler, pages)
 * pageler pages a taşınıcak
 * useRoute() hooks'u kullan <Routes> yerine
 * her sayfanın kendi route dosyası olmalı
 * fetch için custom hooks yaz
 * Context API kullanarak Loader
 */
