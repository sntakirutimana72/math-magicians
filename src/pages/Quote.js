import React, { useEffect, useState } from 'react';
import quotesList from '../helpers/quotes';
import { quoteBlock, sectionBlock } from './Quote.css';

const Quote = () => {
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    setQuotes([...quotesList]);
  }, []);

  return (
    <section style={sectionBlock}>
      {quotes && quotes.map(({ title, by }) => <p style={quoteBlock}>{`${title} - ${by}`}</p>)}
    </section>
  );
};

export default Quote;
