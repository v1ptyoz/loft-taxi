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
            <a href="/map" className={props.activeLink === "map" && "active"}>Карта</a>
          </li>
          <li>
            <a href="/profile" className={props.activeLink === "profile" && "active"} onClick={props.profileHandler}>Профиль</a>
          </li>
          <li>
            <a href="/logout">Выйти</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}