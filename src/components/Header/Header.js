import './Header.css';
import logo from './logo.png'

export function Header(props) {
  
  return (
    <header className="header">
      <div>
        <img src={logo} alt="Логотип" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <span className={props.activeLink === "map" && "active"}>Карта</span>
          </li>
          <li>
            <span className={props.activeLink === "profile" && "active"} onClick={props.profileHandler}>Профиль</span>
          </li>
          <li>
            <span>Выйти</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}