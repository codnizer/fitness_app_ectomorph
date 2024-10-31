import React, { useState } from 'react';
import { auth, db } from '../firebase'; // Make sure Firebase is correctly configured
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, updateDoc } from 'firebase/firestore'; // Firestore imports
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
const EmailRegistration = () => {
    const navigate=useNavigate()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState(''); // User input for PIN
    const [sentPin, setSentPin] = useState(null); // Stored generated PIN
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    // Function to generate a random 4-digit PIN
    const generatePin = () => {
        return Math.floor(1000 + Math.random() * 9000).toString();
    };

    // Handle user registration and saving details to Firestore
    const handleRegistration = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            

            // Generate a random 4-digit PIN and store it
            const generatedPin = generatePin();
            setSentPin(generatedPin);

            // Send the PIN to the user's email using Axios to call an external API
            await axios.post('https://sendemail-6hbyjmlifa-uc.a.run.app/sendemail', {
                email,
                subject: 'Your Verification PIN',
                message: `Your verification PIN is: ${generatedPin}`,
            });

            setSuccess('A PIN has been sent to your email. Please enter it below to verify.');
            setLoading(false); // Stop loading
        } catch (error) {
            setLoading(false);
            setError(`Error during registration: ${error.message}`);
        }
    };

    // Handle PIN verification and update Firestore email validation
    const handlePinVerification = async () => {
        // Create the user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save the user data to Firestore with emailValid set to false initially
        await setDoc(doc(db, 'users', user.uid), {
            username: username,
            email: email,
            emailValid: false,
            uid: user.uid,
          });
        if (pin === sentPin) {
            try {
                const user = auth.currentUser;

                // Update Firestore document to set emailValid to true
                await updateDoc(doc(db, 'users', user.uid), {
                    emailValid: true,
                });

                setSuccess('Email verified and registration completed successfully!');
                // Optionally reset fields
                setUsername('');
                setEmail('');
                setPassword('');
                setPin('');
                setSentPin(null);
                setTimeout(() => {
                    navigate('/profile');
                  }, 2000); // Wait for 2000 milliseconds (2 seconds)
            } catch (error) {
                setError(`Error verifying PIN: ${error.message}`);
            }
        } else {
            setError('Incorrect PIN. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg cairo-regular">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Register</h2>
        <form className="text-white space-y-4" onSubmit={handleRegistration}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button 
                className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200" 
                type="submit" 
                disabled={loading}
            >
                {loading ? 'Registering...' : 'Register'}
            </button>
        </form>
        {success && <p className="text-green-400 text-center mt-2">{success}</p>}
        {error && <p className="text-red-400 text-center mt-2">{error}</p>}
    
        {sentPin && (
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">Enter the PIN sent to your email:</h3>
                <input
                    type="text"
                    placeholder="PIN"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-full p-3 border text-white border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
                />
                <button 
                    onClick={handlePinVerification} 
                    className="mt-2 w-full p-3 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
                >
                    Verify PIN
                </button>
            </div>
        )}
    </div>
    
    );
};

export default EmailRegistration;
