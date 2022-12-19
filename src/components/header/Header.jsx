import Title from "../Title/title"
import Subtitle from "../subtitle/Subtitle"
import styles from './Header.module.css'

function Header(){
  return(
    <div className={styles.header}>
      <Title>Jogo da velha</Title>
      <Subtitle>Criado Subtitleor: Thiago Diniz</Subtitle>
    </div>
  )

}
export default Header