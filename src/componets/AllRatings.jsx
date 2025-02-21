// components/AllRatings.js
import React, { useState, useEffect } from 'react';

const AllRatings = ({ roomId }) => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            const response = await fetch(`/api/feedback/${roomId}`);
            const data = await response.json();
            setFeedbacks(data.sort((a, b) => a.rating - b.rating)); // Sort ratings low to high
        };

        fetchFeedback();
    }, [roomId]);

    return (
        <div>
            <h2>All Ratings (Low to High)</h2>
            <ul>
                {feedbacks.map(feedback => (
                    <li key={feedback._id}>
                        <p><strong>Rating:</strong> {feedback.rating} / 5</p>
                        <p><strong>Comment:</strong> {feedback.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllRatings;
