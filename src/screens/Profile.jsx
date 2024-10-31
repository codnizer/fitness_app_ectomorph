import React, { useEffect, useState } from 'react';
import { useAuth } from '../authContext';
import { useNavigate } from 'react-router-dom';
import logingif from '../assets/logingif.gif';

const Profile = () => {
    const navigate = useNavigate();
    const { user, logout, userData, updateUsername } = useAuth(); // Assuming updateUsername is available in auth context
    const [username, setUsername] = useState(userData?.username || '');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (!userData) {
            navigate('/');
        }
    }, [userData, navigate]);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveUsername = () => {
        if (username.trim()) {
            updateUsername(username); // Update username in Firestore
            setIsEditing(false);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h3 className="cairo-bold text-lg">
                Welcome, {isEditing ? (
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input input-bordered input-primary"
                    />
                ) : (
                    username
                )}
            </h3>
            {isEditing ? (
                <button onClick={handleSaveUsername} className="btn btn-success">Save</button>
            ) : (
                <button onClick={handleEditToggle} className="btn text-white cairo-regular text-lg btn-warning">Edit Username</button>
            )}
            <p className="text-lg text-gray-600">Email: {userData?.email}</p>
            <img
                className="h-[180px] rounded-full"
                src={logingif}
            />
            <button onClick={logout} className="btn btn-danger text-lg text-white">Sign Out</button>
        </div>
    );
};

export default Profile;
