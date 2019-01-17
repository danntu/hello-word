// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import {createStore} from 'redux';

function playlist(state = [], action ){
    if (action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
    if (action.type ==='DELETE_ALL_TRACK'){
        return [];
    }
    if (action.type === 'UPDATE_TRACK'){
        return [ action.payload]
    }
}

const  store = createStore(playlist);

store.subscribe(()=>{
    console.log('subscribe', store.getState());
    const list = document.querySelectorAll('.list')[0];
});

store.dispatch({type: 'ADD_TRACK', payload : 'Smells like spirit'});
store.dispatch({type: 'ADD_TRACK', payload : 'Enter Sandman'});
store.dispatch({type: 'UPDATE_TRACK', payload : 'Opmai'});
store.dispatch({type: 'DELETE_ALL_TRACK'});

// add new track
const addTrackBtn = document.querySelectorAll('.addTrack')[0];
addTrackBtn.addEventListener('click', ()=>{
    const trackName = document.querySelectorAll('.trackInput')[0].value;
    console.log('trackName ',trackName);
    store.dispatch({type: 'ADD_TRACK', payload : trackName});
});


//delete all track
const deleteAllTrackBtn = document.querySelectorAll('.deleteAllTrack')[0];
deleteAllTrackBtn.addEventListener('click', ()=>{
    store.dispatch({type:'DELETE_ALL_TRACK'});
})