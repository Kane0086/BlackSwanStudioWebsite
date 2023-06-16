import '../styles/Header.css';

function Header() {
  const title = 'Turtles On Fire';
  return (
    <div className="header-container">
      <div className="bss-header">
        <div className="title-container">
          <h1 className="bss-title">{title}</h1>
        </div>
        <div className="connection-container">
          <div className="connection-frame">
            <h2 className="connection">Connexion</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
