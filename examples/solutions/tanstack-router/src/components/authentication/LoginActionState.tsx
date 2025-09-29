import { useState, useActionState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [state, submitAction, isPending] = useActionState(
    async (previousState, formData: FormData) => {
      console.log('submitting, I think', previousState, formData);
      console.log(formData.get('email'))
      return { email: formData.get('email'), password: formData.get('password') }
    },
    { email: "rap@creator.net", password: "" }
  );
  useEffect(() => {
    setEmail(state.email)
  }, [state])
  console.log({ state, isPending });
  return (
    <section className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h1 className="mdl-card__title-text">Login</h1>
      </div>
      <div className="mdl-card__supporting-text">
        <div>
          <p>First time user? <Link to="/register">Register</Link></p>
        </div>
        <form action={submitAction}>

          <div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input value={email} onChange={e => setEmail(e.target.value)} id="email" name="email" className="mdl-textfield__input" />
              <label className="mdl-textfield__label" htmlFor="email">Email</label>
            </div>
          </div>

          <div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" >
              <input id="password" name="password" type={showPassword ? "text" : "password"} className="mdl-textfield__input" />
              <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? "hide" : "show"}</span>
              <label className="mdl-textfield__label" htmlFor="email">Password</label>
            </div>
          </div>

          <input type="submit" value="Login" />

        </form>
      </div>
    </section>
  );

}