// components/FeedbackForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const FeedbackForm = ({ roomId }) => {
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Post feedback to the backend
        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roomId, rating, comment }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Feedback submitted successfully!');
            history.push('/feedbacks'); // Redirect to feedback list page after submission
        } else {
            alert('Failed to submit feedback');
        }
    };

    return (
        <div>
            <h2>Add Feedback</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="rating">Rating (1-5):</label>
                <input 
                    type="number" 
                    id="rating" 
                    name="rating" 
                    value={rating} 
                    onChange={(e) => setRating(Number(e.target.value))} 
                    min="1" max="5" 
                    required 
                />
                <br />
                <label htmlFor="comment">Comment:</label>
                <textarea 
                    id="comment" 
                    name="comment" 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    rows="4" 
                    required 
                />
                <br />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
