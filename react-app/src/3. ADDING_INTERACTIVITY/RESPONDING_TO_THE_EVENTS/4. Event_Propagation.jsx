import React from 'react';

export default function App() {
    return (
    <>
      {/* Normal propagation example */}
    <div onClick={() => { alert('Toolbar is clicked!') }}>
        <button onClick={() => { alert('Uploading') }}>
        Upload
        </button>
        <button onClick={() => { alert('Downloading') }}>
        Download
        </button>
    </div>

    <hr />

      {/* Stopping the Event Propagation */}
    <div onClick={() => { alert('Toolbar is clicked!') }}>
        <button onClick={(e) => {
                                    e.stopPropagation();
                                    alert('Uploading');}}>
        Upload
        </button>
        <button onClick={(e) => {
                                    e.stopPropagation();
                                    alert('Downloading');}}>
        Download
        </button>
    </div>
    </>
);
}
