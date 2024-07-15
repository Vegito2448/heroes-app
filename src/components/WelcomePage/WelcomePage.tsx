import './index.css';
export const WelcomePage = () => {
  return (
    <div className="container-fluid container">
      <div className="container__item landing-page-container">
        <div className="content__wrapper">

          <header className="header">
            <div className="menu-icon header__item">
              <span className="menu-icon__line"></span>
            </div>

            <h1 className="heading header__item">Peña's UI</h1>




            <ul className="social-container header__item">
              <li className="social__icon social__icon--fb">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <a
                  href="https://www.linkedin.com/in/vegito2448/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-decoration-none social__link ms-2"
                >
                  LinkedIn
                </a>
              </li>

            </ul>
          </header>

          <p className="coords">N 7° 46' 7.0134"  /  W 72° 12' 50.9934"</p>

          <div className="container-md ellipses-container">

            <h2 className="greeting">Hello</h2>

            <div className="ellipses ellipses__outer--thin">

              <div className="ellipses ellipses__orbit"></div>

            </div>

            <div className="ellipses ellipses__outer--thick"></div>
          </div>

          <div className="scroller">
            <p className="page-title">home</p>

            <div className="timeline">
              <span className="timeline__unit"></span>
              <span className="timeline__unit timeline__unit--active"></span>
              <span className="timeline__unit"></span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
