import { Link } from "react-router-dom";
import "./form.css";

const Form = () => {
  return (
    <section className="form">
      <div className="container">
        <div className="item">
          <h3>who is coming with you</h3>
          <div className="content">
            <div className="box">
              <div className="icon">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>Alone</div>
            </div>
            <div className="box">
              <div className="icon">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <div>Couple</div>
            </div>
            <div className="box">
              <div className="icon">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>Group</div>
            </div>
            <div className="box">
              <div className="icon">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <div>Family</div>
            </div>
          </div>
        </div>
        <div className="item">
          <h3>How Many Days Your Trip Will Take</h3>
          <div className="content">
            <div className="filed">
              <div className="icon">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <input type="text" placeholder="write here" />
            </div>
          </div>
        </div>
        <div className="item">
          <h3>How Many Number of People</h3>
          <div className="content">
            <div className="filed">
              <div className="icon">
                <span className="material-symbols-outlined">diversity_2</span>
              </div>
              <input type="text" placeholder="write here" />
            </div>
          </div>
        </div>
        <div className="item">
          <h3>Are you Traveling With Children ?</h3>
          <div className="content">
            <div className="box">
              <div>Yes</div>
            </div>
            <div className="box">
              <div>No</div>
            </div>
          </div>
        </div>
        <div className="item">
          <h3>How Do You want to spend Your Time</h3>
          <div className="content">
            <div className="box">
              <div>Beach</div>
            </div>
            <div className="box">
              <div>Adventure and sports</div>
            </div>
            <div className="box">
              <div>Museums</div>
            </div>
            <div className="box">
              <div>Food</div>
            </div>
          </div>
        </div>
        <div className="item">
          <h3>Other Special Requits</h3>
          <div className="content">
            <div className="filed">
              <div className="btn">
                <div className="box">
                  <div>Sand</div>
                </div>
              </div>
              <input
                type="text"
                placeholder="Write here a special request you want to add"
              />
            </div>
          </div>
        </div>

        <div className="item">
          <h3>Cuisine Type</h3>
          <div className="content">
            <div className="box">
              <div>Traditional</div>
            </div>
            <div className="box">
              <div>Japenese</div>
            </div>
            <div className="box">
              <div>Italian</div>
            </div>
            <div className="box">
              <div>American</div>
            </div>
            <div className="box">
              <div>Korean</div>
            </div>
            <div className="box">
              <div>Mexician</div>
            </div>
          </div>
        </div>
        {/* <Link to={"/"}> */}
        <div className="next">
        <h2>NEXT</h2>
        </div>
        {/* </Link> */}
       
        
      </div>
    </section>
  );
};

export default Form;
