import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";


import Home from "./Home";

export default function Routes() {
    return (
        <Router>
            <Route path="/" exact={true} component={Home} />
        </Router>
    );
}