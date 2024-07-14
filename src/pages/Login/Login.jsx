
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
import { useState } from 'react';
import { validateEmail } from '../../utils/helper';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const handleLogin = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }


        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }


        setError(null);

    };

    return (
        <>
            <NavBar />
            <div className='flex items-center justify-center mt-28'>

                <div className='w-96 rounded-lg px-7 py-10 border'>
                    <form onSubmit={handleLogin}>
                        <h4 className='text-2xl mb-7'>Login</h4>
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
                        <button type='submit' className={`btn-primary ${error ? '' : 'mt-6'}`}>Login</button>
                        <p className='text-sm text-center my-4'>

                            Not registered?{" "}

                            <Link to='/signup' className='font-medium text-primary underline'>Sign Up</Link>
                        </p>



                    </form>
                </div>
            </div>
        </>);

}

export default Login