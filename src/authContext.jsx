import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore'; // Import Firestore functions
import { auth, db } from './firebase'; // Ensure your Firebase config and Firestore db are imported

// Create the User Context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state to track auth process
    const [userData, setUserData] = useState(null); // State to hold user data from Firestore

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // Fetch user data from Firestore if user is authenticated
                const userDoc = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(userDoc);

                if (docSnap.exists()) {
                    setUserData(docSnap.data()); // Set user data if it exists
                } else {
                    console.log('No such document!');
                }
            } else {
                setUserData(null); // Reset user data if no user is authenticated
            }
            setLoading(false); // Set loading to false once auth status is determined
        });
        
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const updateUsername = async (newUsername) => {
        if (user) {
            const userDoc = doc(db, 'users', user.uid);
            await updateDoc(userDoc, { username: newUsername });
            setUserData((prevData) => ({ ...prevData, username: newUsername })); // Update local state
        }
    };

    const logout = async () => {
        await signOut(auth);
        setUser(null);
        setUserData(null); // Clear user data on logout
    };

    return (
        <AuthContext.Provider value={{ user, userData, loading, logout, updateUsername }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// Custom hook for accessing the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
