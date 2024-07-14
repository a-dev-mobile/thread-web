import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import PasswordInput from '../../components/Input/PasswordInput';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const handleSignUp = (e) => {
    e.preventDefault();


if(!name ||!email ||!password) {
  setError('Please fill all fields');
  return;
}

setError(null);

  };


  return (
    <>
      <NavBar />
      <div className='flex items-center justify-center mt-28'>

        <div className='w-96 rounded-lg px-7 py-10 border'>
          <form onSubmit={handleSignUp}>
            <h4 className='text-2xl mb-7'>SignUp</h4>
            <input
              type="text"
              placeholder='Name'
              className='input-box'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder='Email'
              className='input-box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />


            {error && <p className='text-red-500 text-sm mb-1'>{error}</p>}
            {/* Добавляем пространство над кнопкой только когда нет ошибки */}
            {/* {!error && <div className='mb-8'></div>} */}
            <button type='submit' className={`btn-primary ${error ? '' : 'mt-6'}`}>Create Account</button>
            <p className='text-sm text-center my-4'>

              Already have an account?{" "}

              <Link to='/login' className='font-medium text-primary underline'>Login</Link>
            </p>



          </form>
        </div>
      </div>
    </>
  );

}

export default SignUp