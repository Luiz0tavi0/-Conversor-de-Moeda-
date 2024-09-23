import React from "react";
import style from './main-section.module.css'
interface MainSectionProps {
    children: React.ReactNode;
}

const MainSection = ({ children }: MainSectionProps) => {
    return (
        <section id={style['main-section']}>
            {children}
        </section>
    )
}

export default MainSection;