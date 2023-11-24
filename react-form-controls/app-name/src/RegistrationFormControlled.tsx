import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState<string>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form);

    console.log(`state:`, data);
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={passWord ?? ''}
          onChange={(event) => setPassWord(event.target.value)}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
