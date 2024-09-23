import style from './header.module.css';

interface HeaderProps {
    currencyName: string
}

const Header = ({ currencyName }: HeaderProps) => {
    return (
        <header className={style.card__header}>
            <h1 className={style.card_title}>{currencyName}</h1>
        </header>
    );
};

export default Header;
