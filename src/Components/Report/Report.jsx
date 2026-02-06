import React from 'react';

function Report(report) {
  return (
    <>
    <h3 className='text-center bg-teal-900 w-full text-white font-bold text-2xl p-2'>Your Accuracy: {report.accuracy}% || WPM: {report.wpm} || Errors: {report.errors}</h3>
    </>
  )
};

export default Report;