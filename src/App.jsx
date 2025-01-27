import "./App.css";
import { GrCentos } from "react-icons/gr";
import { TbSettingsStar } from "react-icons/tb";
import { FcBullish } from "react-icons/fc";
import { GrLike } from "react-icons/gr";
import { GiFocusedLightning } from "react-icons/gi";



function App() {
  return (
    <>
      <section className="Section-1">
        <div className="container">
          <p className="text">
            <GrCentos /> Sitemark
          </p>
          <div className="hero">
            <div>
              <TbSettingsStar />
            </div>
            <div>
              <p className="text-ls">Adaptable performance</p>
              <p className="text-lg">
                Our product effortlessly adjusts to your needs, boosting
                efficiency and simplifying your tasks.
              </p>
            </div>
          </div>
          <div className="hero">
            <div>
              <FcBullish />
            </div>
            <div>
              <p className="text-ls">Built to last</p>
              <p className="text-lg">
                Experience unmatched durability that goes above and beyond with
                lasting investment.
              </p>
            </div>
          </div>
             <div className="hero">
            <div>
            <GiFocusedLightning />
            </div>
            <div>
              <p className="text-ls">Innovative functionality</p>
              <p className="text-lg">
              Stay ahead with features that set new standards, addressing your evolving needs better than the rest.
              </p>
            </div>
          </div>
          <div className="hero">
            <div>
            <GrLike />
            </div>
            <div>
              <p className="text-ls">Adaptable performance</p>
              <p className="text-lg">
                Our product effortlessly adjusts to your needs, boosting
                efficiency and simplifying your tasks.
              </p>
            </div>
          </div>
       
        </div>
      </section>
    </>
  );
}

export default App;
