import { User } from "../../types/User";


export const Account = () => {
  const user: User = {};  //TODO: read from state
  console.log("Account", user);
  const showPassword = true;
  return (
    <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h1 className="mdl-card__title-text">Register</h1>
      </div>
      <div className="mdl-card__supporting-text">
        <form onSubmit={(e) => register(e)}>
          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input id="email" className="mdl-textfield__input" />
              <label className="mdl-textfield__label" htmlFor="email">Email</label>
            </div>
          </div>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
              <input value={user.password} id="password" type={showPassword ? "text" : "password"} className="mdl-textfield__input" />
              <label className="mdl-textfield__label" htmlFor="password">Password</label>
            </div>
          </div>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
              <input id="password2" type={showPassword ? "text" : "password"} className="mdl-textfield__input" />
              <label className="mdl-textfield__label" htmlFor="password2">Password (again)</label>
            </div>
          </div>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input id="given" className="mdl-textfield__input" />
              <label className="mdl-textfield__label" htmlFor="given">First name (given name)</label>
            </div>
          </div>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input id="family" className="mdl-textfield__input" />
              <label className="mdl-textfield__label" htmlFor="family">Last name (family name)</label>
            </div>
          </div>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input id="phone" className="mdl-textfield__input" />
              <label className="mdl-textfield__label" htmlFor="phone">Phone</label>
            </div>
          </div>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input id="number" className="mdl-textfield__input" />
              <label className="mdl-textfield__label" htmlFor="number">Credit card</label>
            </div>
          </div>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input id="expiration" type="date" className="mdl-textfield__input" />
              <label className="mdl-textfield__label" htmlFor="expiration">Expiration</label>
            </div>
          </div>

          <input type='submit' value='Save' className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />
        </form>
      </div>
    </section>
  )

  function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const given = (form.elements.namedItem("given") as HTMLInputElement).value;
    const family = (form.elements.namedItem("family") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const number = (form.elements.namedItem("password") as HTMLInputElement).value;
    const expiration = (form.elements.namedItem("password") as HTMLInputElement).value;
    const user = {
      email,
      password,
      name: { given, family },
      phone,
      credit_card: { number, expiration },
    };
    console.log(user)
    //TODO: dispatch(actions.register(user));
  }
}


const styles = {
  wrapper: {
    margin: "10px auto",
  },
  inputDivs: {
    //display: "block",
  },
  submitButton: {
    width: "95%",
  },
}