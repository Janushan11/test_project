// components/AllFeedbacks.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllFeedbacks = ({ roomId }) => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            const response = await fetch(`/api/feedback/${roomId}`);
            const data = await response.json();
            setFeedbacks(data);
        };

        fetchFeedback();
    }, [roomId]);

    const deleteFeedback = async (id) => {
        const response = await fetch(`/api/feedback/${id}`, { method: 'DELETE' });
        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            setFeedbacks(feedbacks.filter(feedback => feedback._id !== id));
        } else {
            alert('Failed to delete feedback');
        }
    };

    return (
        <div>
            <h2>All Feedbacks</h2>
            <ul>
                {feedbacks.map(feedback => (
                    <li key={feedback._id}>
                        <p><strong>Rating:</strong> {feedback.rating} / 5</p>
                        <p><strong>Comment:</strong> {feedback.comment}</p>
                        <button onClick={() => deleteFeedback(feedback._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/ratings">View Ratings (Sorted)</Link>
        </div>
    );
};

export default AllFeedbacks;
