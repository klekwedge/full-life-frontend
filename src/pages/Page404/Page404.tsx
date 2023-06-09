import { Link } from "react-router-dom";
import "./Page404.scss";

export function Page404(): JSX.Element {
  return (
    <div className="center">
      <div className="error">
        <div className="number">4</div>
        <div className="illustration">
          <div className="circle"></div>
          <div className="clip">
            <div className="paper">
              <div className="face">
                <div className="eyes">
                  <div className="eye eye-left"></div>
                  <div className="eye eye-right"></div>
                </div>
                <div className="rosyCheeks rosyCheeks-left"></div>
                <div className="rosyCheeks rosyCheeks-right"></div>
                <div className="mouth"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="number">4</div>
      </div>
      <div className="text">
        Упс. Страница, которую вы ищете, не существует.
      </div>
      <Link className="button" to="/">
        Back Home
      </Link>
    </div>
  );
}
