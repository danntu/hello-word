import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
const initialState= [
    'Test1',
    'Test2'
];
function playlist(state = initialState, action ){
    if (action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playlist);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import {createStore} from 'redux';
//
// function playlist(state = [], action ){
//     if (action.type === 'ADD_TRACK'){
//         return [
//             ...state,
//             action.payload
//         ];
//     }
//     if (action.type ==='DELETE_ALL_TRACK'){
//         return [];
//     }
//     if (action.type === 'UPDATE_TRACK'){
//         return [ action.payload]
//     }
//     return state;
// }
//
// const  store = createStore(playlist);
//
// // add new track
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// //delete all track
// const deleteAllTrackBtn = document.querySelectorAll('.deleteAllTrack')[0];
// //update track
// const updateTrackBtn = document.querySelectorAll('.updateTrack')[0];
//
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
// store.subscribe(()=>{
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach( track =>{
//        const li = document.createElement('li');
//        li.textContent = track;
//        list.appendChild(li);
//     });
// });
//
//
//
// addTrackBtn.addEventListener('click', ()=>{
//     const trackName = trackInput.value;
//     store.dispatch({type: 'ADD_TRACK', payload : trackName});
// });
//
//
// deleteAllTrackBtn.addEventListener('click', ()=>{
//     const trackName = trackInput.value;
//     store.dispatch({type:'DELETE_ALL_TRACK', payload:trackName});
// });
//
//
// updateTrackBtn.addEventListener('click',()=>{
//     const trackName = trackInput.value;
//     store.dispatch({type:'UPDATE_TRACK', payload: trackName});
// });