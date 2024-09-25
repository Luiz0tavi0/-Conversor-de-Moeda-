import Content from './Content/Content';
import Header from './Header/Header';
import loader from './../../assets/loader.svg';
import style from './card.module.css';
import { useCurrencyData } from '../../hooks/useCurrencyData';
import { ICurrencyData } from '../../interfaces/currency-data';
import Failure from './Failure/failure';

interface CardProps {
  currencyName: string;
  currencyPair: string;
}

const Card = ({ currencyName, currencyPair }: CardProps) => {
  const { data, isSuccess, isFetched, isLoadingError, isRefetching, isFetching, isError, refetch } = useCurrencyData(currencyPair);
  let currencyData: ICurrencyData | undefined;

  if (data && isSuccess)
    currencyData = data[currencyPair.replace('-', '')];

  console.log({ data, isSuccess, isFetched, isLoadingError, isRefetching, isFetching, isError, refetch });
  return (
    <article className={style.card}>
      <Header currencyName={currencyName} />

      {isError ? (
        <Failure refetch={refetch} />
      ) : isFetching ? (
        <img src={loader} alt="loader" className={style.loader} />
      ) : (
        isSuccess && currencyData && (
          <Content
            rate={currencyData.bid}
            variation={currencyData.pctChange}
            lastUpdated={currencyData.timestamp}
          />
        )
      )}
    </article>
  );
};

export default Card;
