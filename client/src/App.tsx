import './App.css';
import InvestorForm from './components/InvestorForm';

function App() {
  return (
    <>
      <div className='app-content'>
        <h2>Investor Form</h2>
        <p>Please fill out the form below:</p>
        <p>All fields are required.</p>
      </div>
      <InvestorForm />
    </>
  );
}

export default App;
