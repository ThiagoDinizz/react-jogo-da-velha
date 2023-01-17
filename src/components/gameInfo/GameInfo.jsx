import styles from './GameInfo.module.css'
import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo ({ currentPlayer, winner, onReset, isDraw }) {

  const shouldEnableButton = () => {
    if (winner !== 0) return true
    if (isDraw) return true
  }

  return(
    <div className={styles.gameInfo}>
      {
        isDraw && <h4> EMPATE! Próxima jogada!</h4>
      }
      
      {
        !isDraw && winner === 0 &&
        <>
          <h4> Próximo a jogar:</h4>
          {
            currentPlayer === 1 && <Icon iconName="circle" />
          }
          {
            currentPlayer === -1 && <Icon iconName="x" />
          }
        </>
      }

      {
        !isDraw && winner !== 0 &&
        <>
        <h4>Fim de Jogo! Campeão:</h4>
          {
            winner === 1 && <Icon iconName="circle" />
          }
          {
            winner === -1 && <Icon iconName="x" />
          }
        </>
      }

      <Button onClick={onReset} disabled={!shouldEnableButton()}>
        Reiniciar
      </Button>
    </div>
  )
}

export default GameInfo