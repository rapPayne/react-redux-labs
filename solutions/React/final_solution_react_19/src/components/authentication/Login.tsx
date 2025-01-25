import { useActionState, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Convert, User } from '../../types/User';
import toast from 'react-hot-toast';
import { State, useStore } from '../../store/useStore';

export const Login = () => {
  const { user, setUser } = useStore();
  //const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const redirectUrl = params.get('redirectUrl');
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatch, isPending] = useActionState(
    async (prevState, formData) => {
      const objectFromFormData = Object.fromEntries(formData.entries())
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(objectFromFormData)
      });
      if (!res.ok) {
        toast.error(`Couldn't log you in. Please try again`)
        console.warn(`Error posting: ${res.status} ${res.statusText}`);
        return undefined;
      } else {
        const user = Convert.toUser(await res.text());
        console.log(user);
        setUser(user);
        return user;
      }
    },
    user  // Initial state is the user from Zustand store
  );

  if (user) {
    navigate(redirectUrl || "/");
  }

  return (
    <section>
      {isPending ? <h1>Loading...</h1> : null}
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h1 className="mdl-card__title-text">Login</h1>
      </div>
      <div className="mdl-card__supporting-text">
        <div>
          <p>First time user? <Link to="/register">Register</Link></p>
        </div>
        <form action={dispatch}>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
              <label htmlFor="username">Username</label>
              <input id="username" name="username" defaultValue={state?.username} />
            </div>
          </div>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
              <label htmlFor="email">Password</label>
              <input id="password" name="password" type={showPassword ? "text" : "password"} />
              <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? "hide" : "show"}</span>
            </div>
          </div>

          <input type="submit" value="Login" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />

        </form>
      </div>
    </section>
  );

  function login(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    //TODO: dispatch(actions.login(e.target?['email'].value, e.target['password'].value));
  }

};

const styles = {
  inputDivs: {
    display: "block",
  },
  submitButton: {
    width: "95%",
  },
}