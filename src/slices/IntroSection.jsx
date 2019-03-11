import React from 'react';

export const IntroSection = props => {
  const { data } = props;
  const { primary } = data;
  const { title, subtitle } = primary;
  return (
    <section className="intro-section">
      <div className="wrapper">
        <h1>{title.text}</h1>
        <h2>{subtitle.text}</h2>
      </div>
    </section>
  );
};
