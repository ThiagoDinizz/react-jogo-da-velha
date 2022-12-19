import Title from "../Title/title"
import Subtitle from "../subtitle/Subtitle"
import styles from './Header.module.css'
import Icon from "../icon/Icon"

function Header(){
  return(
    <div className={styles.header}>
      <Title>Jogo da velha</Title>
      <Subtitle>Criado Subtitleor: Thiago Diniz</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" link="https://github.com/ThiagoDinizz"/>
      </div>
    </div>
  )

}
export default Header