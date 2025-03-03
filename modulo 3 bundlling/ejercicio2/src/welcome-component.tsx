import React from 'react';
import './mystyles.scss';
export const WelcomeComponent: React.FC = () => {
  return (
    console.log('environment =',process.env.ENV),
    <div>
      <h1 className = "red-background">Hello world from React!</h1>
    </div> 
  );
};