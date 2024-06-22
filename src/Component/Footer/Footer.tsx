import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <span className={ styles.footer__span }>Double-click to edit a todo</span>
      <span className={ styles.footer__span }>Created by the TodoMVC Team</span>
      <span className={ styles.footer__span }>Part of <a target="_blank" rel='noreferrer' href="http://todomvc.com" className={ styles.footer__anchor }>TodoMVC</a></span>
    </footer>
  )
}