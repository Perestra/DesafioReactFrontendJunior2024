import styles from './UnordenedList.module.scss'

type Props = {
  list: React.ReactNode[]
}

export const UnordenedList: React.FC<Props> = ({ list }) => {
  return (
    <div className={ styles.list }>
      <ul className={ styles.list__unordened }>
        { list }
      </ul>
    </div>
  )
}