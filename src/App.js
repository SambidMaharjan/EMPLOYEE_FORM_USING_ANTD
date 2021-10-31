import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="title">Employee Registration</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input type="text" placeholder="Enter name" required />
            </div>

            <div className="input-box">
              <span className="details">Designation</span>
              <input type="text" placeholder="Enter title" required />
            </div>

            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter email" required />
            </div>

            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" placeholder="Enter number" required />
            </div>

            <div className="input-box">
              <span className="details">Address</span>
              <input type="text" placeholder="Enter address" required />
            </div>

            <div className="input-box">
              <span className="details">Nationality</span>
              <select id="inputState">
                <option selected hidden>
                  Choose...
                </option>
                <option>Nepalese</option>
                <option>Indian</option>
                <option>American</option>
              </select>
            </div>

            <div className="input-box">
              <span className="details">Start Date</span>
              <input type="date" placeholder="Enter password" required />
            </div>

            <div className="input-box">
              <span className="details">End Date</span>
              <input type="date" placeholder="End date" required />
            </div>
          </div>

          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span className="gender-title">Gender</span>
          </div>

          <div className="category">
            <label for="dot-1">
              <span className="dot one"></span>
              <span className="gender">Male</span>
            </label>

            <label for="dot-2">
              <span className="dot two"></span>
              <span className="gender">Female</span>
            </label>

            <label for="dot-3">
              <span className="dot three"></span>
              <span className="gender">Prefer not to say</span>
            </label>
          </div>

          <div className="Photo">
            <span className="details">Photo</span>
            <input type="file" placeholder="photo" required />
          </div>

          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
