import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({iconName})=> <Icon iconName={iconName} size="25px"/>

function GameOption({status}){
  return(
    <div className={styles.gameOption}>
      {
        status === -1 && <Icon iconName="x" />
      }
      {
        status === 1 && <Icon iconName="circle"/>
      }
      
    </div>
  )

}

export default GameOption