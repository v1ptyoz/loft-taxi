import './Header.css';
import logo from './logo.png'

export function Header(props) {
  const NAVS = [{name: 'main', text: 'Карта'}, 
                {name: 'profile', text: 'Профиль'}, 
                {name: 'login', text: 'Выйти'}]
  return (
    <header className="header">
      <div>
        <img src={logo} alt="Логотип" />
      </div>
      <nav className="nav">
        <ul>
          {
            NAVS.map((item, index) => {
              return (
                <li key={index}>
                  <span className={item.name === props.currentPage ? "active" :  ""} onClick={() => {props.showPage(item.name)}}>{item.text}</span>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}