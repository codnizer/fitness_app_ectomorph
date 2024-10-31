import React, { useEffect, useState } from 'react';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { auth } from '../firebase'; // Your Firebase configuration
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged } from 'firebase/auth';

const GoogleSignIn = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser || null);
        });

        return () => unsubscribe();
    }, []);

    const handleGoogleSignIn = async () => {
        try {
            // Start Google Sign-In
            const googleUser = await GoogleAuth.signIn();

            if (googleUser) {
                // Get the idToken and accessToken
                const { idToken, accessToken } = googleUser;

                // Create a new credential
                const credential = GoogleAuthProvider.credential(idToken);

                // Sign in with Firebase using the credential
                const firebaseResult = await signInWithCredential(auth, credential);

                setUser(firebaseResult.user); // Set user in state
                console.log('Signed in user:', firebaseResult.user);
            }
        } catch (error) {
            console.error('Google sign-in error:', error);
        }
    };

    const handleSignOut = async () => {
        await GoogleAuth.signOut();
        setUser(null);
    };

    return (
        <div>
            {user ? (
                <div className="flex flex-col justify-center items-center gap-5">
                    <h3>Welcome, {user.displayName}</h3>
                    <img
                        src={user.photoURL}
                        alt={user.displayName}
                        style={{ borderRadius: '50%', width: '100px', height: '100px' }}
                    />
                    <button onClick={handleSignOut} className="btn btn-danger text-lg text-white">Sign Out</button>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center gap-5">
                    <button onClick={handleGoogleSignIn} className="btn btn-info text-lg text-white">Sign in with Google</button>
                </div>
            )}
        </div>
    );
};

export default GoogleSignIn;
