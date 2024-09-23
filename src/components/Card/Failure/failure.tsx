import React from 'react';
import style from './failure.module.css';
import Button from '../Button/button';

interface FailureProps {
  refetch: () => void;
}

const Failure = React.memo(({ refetch }: FailureProps) => {
  // console.log('refatching');
  return (
    <div className={style['card__view-failure']}>
      <h2 className={style['card__view-failure--title']}>Algo deu errado</h2>
      <Button handleClick={refetch} >
        Recarregar
      </Button>
    </div>
  );
}
)

export default Failure;
