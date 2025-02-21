// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FeedbackForm from "./components/FeedbackForm";

import AllFeedbacks from './components/AllFeedbacks';
import AllRatings from './components/AllRatings';
import Chatbot from './components/Chatbot';

function App() {
    const roomId = 'your-room-id'; // You can pass the roomId dynamically

    return (
        <Router>
            <div className="App">
                <h1>Hotel Feedback System</h1>
                <Switch>
                    <Route path="/" exact>
                        <FeedbackForm roomId={roomId} />
                    </Route>
                    <Route path="/feedbacks" exact>
                        <AllFeedbacks roomId={roomId} />
                    </Route>
                    <Route path="/ratings" exact>
                        <AllRatings roomId={roomId} />
                    </Route>
                    <Route path="/chatbot" exact>
                        <Chatbot />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
// mhgfjhvh
export default App;
