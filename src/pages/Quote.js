import React, { useEffect, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import quotesList from '../helpers/quotes';
import styles from './Quote.module.css';

const Quote = () => {
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    setQuotes([...quotesList]);
  }, []);

  return (
    <section className={styles.Quote}>
      {quotes && quotes.map(({ title, by }) => (
        <p key={uuid4()} className={styles.QuoteItem}>
          {title}
          <i className={styles.QuoteBy}>{`~ ${by}`}</i>
        </p>
      ))}
    </section>
  );
};

export default Quote;
