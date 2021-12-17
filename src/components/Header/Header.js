import './Header.css';
import logo from './logo.png'

export function Header(props) {
  function setActive(page) {
    const spans = document.querySelectorAll(".nav ul li span");
    const activeSpan = document.querySelector(`span[data-page=${page}]`);
    spans.forEach(span => span.classList.remove('active'));
    activeSpan.classList.add("active");
    props.showPage(page);
  }
  return (
    <header className="header">
      <div>
        <img src={logo} alt="Логотип" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <span data-page="main" classList="active" onClick={() => {setActive("main")}}>Карта</span>
          </li>
          <li>
            <span data-page="profile" onClick={() => {setActive("profile")}}>Профиль</span>
          </li>
          <li>
            <span data-page="logout">Выйти</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}