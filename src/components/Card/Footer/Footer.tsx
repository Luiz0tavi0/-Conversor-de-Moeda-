import style from './footer.module.css';

interface FooterProps {
  variation: string;
  lastUpdated: string;

}

const Footer = ({ variation, lastUpdated }: FooterProps) => {
  const date = new Date(Number(lastUpdated) * 1000)

  return (
    <footer className={style.card__footer}>
      <div className={style.card__variation} aria-describedby={style['card__last-updated']}>
        <h2>Variação (%)</h2>
        <span>{Number(variation).toLocaleString(
          'pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        }</span>
      </div>
      <div className={style['card__last-updated']}>
        <h2>Atualizado</h2>
        <time dateTime={date.toLocaleTimeString()}>{date.toLocaleTimeString()}</time>
      </div>
    </footer>
  );
};

export default Footer;