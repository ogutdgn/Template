import React from 'react';
import "./Alert.css";

export const alertFunc = () => {
    return(
        <div>
            <button>Show Alert</button>
            <div class="alert hide">
                <span class="fas fa-exclamation-circle"></span>
                <span class="msg">Warning: This is a warning alert!</span>
                <div class="close-btn">
                <span class="fas fa-times"></span>
                </div>
            </div>
        </div>
    )
}
