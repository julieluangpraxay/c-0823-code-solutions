import './App.css';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { RegistrationFormControlled } from './RegistrationFormControlled';

function App() {
  return (
    <>
      <h4> Uncontrolled </h4>
      <RegistrationFormUncontrolled />
      <h4> Controlled </h4>
      <RegistrationFormControlled />
    </>
  );
}

export default App;
