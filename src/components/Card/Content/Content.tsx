import Footer from '../Footer/Footer';
import style from './content.module.css';

const currencyFormat = Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: 'BRL', currencySign: 'standard'
});

interface ContentProps {
  rate: string;
  variation: string;
  lastUpdated: string;
}

const Content = ({ rate, variation, lastUpdated }: ContentProps) => {
  const numericRate = parseFloat(rate);
  let colorVariable = '--text-green';

  if (numericRate > 5.0) colorVariable = '--text-blue';
  if (numericRate <= 1.0) colorVariable = '--text-red';

  return (
    <>
      <div className={style['card__view-data']}>
        <section className={style.card__content}>
          <span
            aria-label="Exchange rate in BRL"
            className={style.card__value}
            style={{ color: `var(${colorVariable})`, }}
          >
            {currencyFormat.format(numericRate)}
          </span>
        </section>
        <Footer variation={variation} lastUpdated={lastUpdated} />
      </div>

    </>
  );
};

export default Content;