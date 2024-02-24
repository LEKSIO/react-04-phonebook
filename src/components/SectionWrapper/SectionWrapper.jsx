import css from './SectionWrapper.module.css';

export const SectionWrapper = ({ title, children }) => (
  <section className={css['app-wrapper']}>
    <h1>{title}</h1>
    {children}
  </section>
);
