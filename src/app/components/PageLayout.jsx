'use client';

import React from 'react';
import { useIsAuthenticated } from '@azure/msal-react';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated);

  return (
    <div className="w-full p-[40px]">
      <div className="flex items-center justify-between">
        <a className="navbar-brand" href="/">
          Microsoft Identity Platform
        </a>
        <div className="">
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </div>
      </div>
      <br />
      <br />
      <h5>
        <center>
          Welcome to the Microsoft Authentication Library For JavaScript - React
          SPA Tutorial
        </center>
      </h5>
      <br />
      <br />
      {props.children}
    </div>
  );
};

export default PageLayout;
