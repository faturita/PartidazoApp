import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CommentBox from './CommentBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
 <CommentBox
 url='/api/comments'
 pollInterval={2000} />,
 document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
