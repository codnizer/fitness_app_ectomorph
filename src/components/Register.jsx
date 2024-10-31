import React, { useState } from 'react';
import { register } from '../services/authService.js';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState('');
    const [isPinSent, setIsPinSent] = useState(false); // Track if the PIN has been sent

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Step 1: Register the user
            await register(email, password);
            alert('Registration successful. A verification PIN has been sent to your email.');

           // Send the PIN to the user's email using axios
await axios.post('https://sendemail-6hbyjmlifa-uc.a.run.app/sendemail', {
    email: email,
    subject: 'Email Verification PIN',
    message: `Your verification PIN is: ${pin}`, // Use the generated PIN
}).catch((err) => {
    console.error("Error sending email:", err);
    setError('Failed to send email. Please try again later.');
});
            setIsPinSent(true); // Set the PIN as sent
        } catch (error) {
            alert('Error registering: ' + error.message);
        }
    };

    const generatePin = () => {
        // Generate a 4-digit random PIN
        return Math.floor(1000 + Math.random() * 9000).toString();
    };

    const handlePinSubmit = (e) => {
        e.preventDefault();
        // Here you would verify the PIN
        alert(`You entered the PIN: ${pin}`);
        // You can also add logic to check if the entered PIN matches the sent PIN
    };

    return (
        <>
            <div className='flex flex-col gap-20 justify-around'>
                <div>
                    <h2 className='text-lg cairo-medium text-center py-4'>Or</h2>
                    <h2 className='text-lg cairo-medium text-center py-4'>Register using your Email</h2>
                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow cairo-medium"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="password"
                                className="grow cairo-medium"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <button className='btn btn-primary cairo-bold text-lg text-black' type="submit">Register</button>
                    </form>

                    {isPinSent && (
                        <form className='flex flex-col gap-3 mt-5' onSubmit={handlePinSubmit}>
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow cairo-medium"
                                    placeholder="Enter your PIN"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    required
                                />
                            </label>
                            <button className='btn btn-primary cairo-bold text-lg text-black' type="submit">Verify PIN</button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default Register;
