import { Convert, User } from "../../types/User";
import { useStore } from "../../store/useStore";
import { useState } from "react";
import { useFormStatus } from "react-dom";

// Pulled out so we can use useFormStatus
const FormContents = ({ user, isAddingNewUser }: { user: User | undefined, isAddingNewUser: boolean }) => {
  const status = useFormStatus();
  const [username, setUsername] = useState(user?.username);
  const showPassword = true;

  return (
    <>
      <div className="mdl-color--primary mdl-color-text--white">
        <h1>{isAddingNewUser ? "Register" : "My Account"} {status.pending ? "Pending" : "Settled"}</h1>
      </div>
      <pre>{JSON.stringify(status, null, 2)}</pre>
      {/* <input type="hidden" name="id" value={user?.id} /> */}
      <div>
        <label htmlFor="username">Username</label>
        <input defaultValue={username} onChange={e => setUsername(e.target.value)} id="username" name="username" className="mdl-textfield__input" />
        {isAddingNewUser && username && <div>{"'" + username + "' is available -- TODO: this doesn't actually work"}</div>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input defaultValue={user?.password} id="password" name="password" type={showPassword ? "text" : "password"} className="mdl-textfield__input" />
      </div>

      <div>
        <label htmlFor="password2">Password (again)</label>
        <input id="password2" name="password2" type={showPassword ? "text" : "password"} className="mdl-textfield__input" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input defaultValue={user?.email} id="email" name="email" className="mdl-textfield__input" />
        {status.data && <div>{`Submitting '${status.data.get("email")}'`}</div>}
      </div>

      <div>
        <label htmlFor="first">First name (given name)</label>
        <input defaultValue={user?.first} id="first" name="first" className="mdl-textfield__input" />
        {status.data && <div>{`Submitting '${status.data.get("first")}'`}</div>}
      </div>

      <div>
        <label htmlFor="last">Last name (family name)</label>
        <input defaultValue={user?.last} id="last" name="last" className="mdl-textfield__input" />
        {status.data && <div>{`Submitting '${status.data.get("last")}'`}</div>}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input defaultValue={user?.phone} id="phone" name="phone" className="mdl-textfield__input" />
      </div>

      <div>
        <label htmlFor="pan">Credit card</label>
        <input defaultValue={user?.creditCard?.pan} id="pan" name="pan" className="mdl-textfield__input" />
      </div>

      <div >
        <label htmlFor="expiryMonth">Expiry month</label>
        <input defaultValue={user?.creditCard?.expiryMonth} id="expiryMonth" name="expiryMonth" className="mdl-textfield__input" />
      </div>

      <div >
        <label htmlFor="expiryYear">Expiry year</label>
        <input defaultValue={user?.creditCard?.expiryYear} id="expiryYear" name="expiryYear" className="mdl-textfield__input" />
      </div>

      <input type='submit' value={status.pending ? 'Hold yer horses!' : 'Save'} disabled={status.pending} />

    </>

    // <pre>{JSON.stringify(user, undefined, 2)}</pre>
  )
}

export const Account = () => {
  const store = useStore();
  const user: User | undefined = store.user;
  const isUpdatingExistingUser = !!user;
  const isAddingNewUser = !user;
  console.log("Account", user);

  async function registerOrUpdate(formData: FormData) {
    for (const [k, v] of formData.entries()) {
      console.log(`${k} is ${v}`)
    }
    console.log({ username: formData.get("username") })
    const userToBeSent = Object.fromEntries(formData);
    await fetch(isAddingNewUser ? "http://localhost:3008/api/register" : `http://localhost:3008/api/account/${user?.id}`, {
      body: JSON.stringify(userToBeSent),
      headers: { 'Content-Type': "application/json" },
      method: isAddingNewUser ? "POST" : "PATCH"
    })
      .then(res => res.text())
      .then(text => Convert.toUser(text))
      .then(user => store.setUser(user))
  }

  return (
    <section>
      <form action={registerOrUpdate}>
        <FormContents user={user} isAddingNewUser={isAddingNewUser} />
      </form>
    </section>
  )


  // function register(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const form = e.target as HTMLFormElement;
  //   const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  //   const password = (form.elements.namedItem("password") as HTMLInputElement).value;
  //   const given = (form.elements.namedItem("given") as HTMLInputElement).value;
  //   const family = (form.elements.namedItem("family") as HTMLInputElement).value;
  //   const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
  //   const number = (form.elements.namedItem("password") as HTMLInputElement).value;
  //   const expiration = (form.elements.namedItem("password") as HTMLInputElement).value;
  //   const user = {
  //     email,
  //     password,
  //     name: { given, family },
  //     phone,
  //     credit_card: { number, expiration },
  //   };
  //   console.log(user)
  //   //TODO: dispatch(actions.register(user));
  // }
}