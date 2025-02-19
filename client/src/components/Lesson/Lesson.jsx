import React from 'react';

const divStyle = {
  width: '200px',
  height: '100%',
  color: '#FFFFFF',
  backgroundColor: '#5BABDE',
  borderRadius: '10px',
  marginLeft: '2%',
  marginBottom: '2%',
  padding: '10px',
  overflow: 'auto'
};

export default function Lesson({ lesson_title, lesson_contents }) {

  return (
    <div style={divStyle}>
      <h1>{lesson_title}</h1>
      <p>{lesson_contents}</p>
    </div>
  );
}