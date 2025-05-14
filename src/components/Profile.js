import React from 'react';

function Profile() {
    // Placeholder for user profile information.
    const user = {
        username: "john.doe",
        email: "john.doe@example.com",
        // ... other profile information
    };

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                {/* Display other profile information here */}
            </div>
        </div>
    );
}

export default Profile;