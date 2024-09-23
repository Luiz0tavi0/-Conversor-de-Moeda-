import './App.css'
import Card from './components/Card/card'
import Header from './components/Header/header'
import MainSection from './components/MainSection/main-section'

type Currency = {
  name: string;
  pair: string;
};

const currenciesList: Currency[] = [
  { name: "Dólar Canadense", pair: "CAD-BRL" },
  { name: "Peso Argentino", pair: "ARS-BRL" },
  { name: "Libra Esterlina", pair: "GBP-BRL" },
];
const App = () => {


  return (
    <main className='main-app'>
      <Header />
      <MainSection>
        {
          currenciesList.map(
            (currency) =>
              <Card key={`curr-pair_${currency.pair}`}
                currencyName={currency.name}
                currencyPair={currency.pair}
              />
          )
        }
      </MainSection>
    </main>
  )
}

export default App
