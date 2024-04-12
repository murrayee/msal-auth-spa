import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import { Button, Dropdown } from 'antd';

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = async (loginType) => {
    if (loginType === 'popup') {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    } else if (loginType === 'redirect') {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
      instance.handleRedirectPromise().then((res) => {
        console.log(res);
      });
    }
  };
  const items = [
    {
      key: '3',
      label: (
        <span onClick={() => handleLogin('popup')}>Sign in using Popup</span>
      ),
    },
    {
      key: '4',
      label: (
        <span onClick={() => handleLogin('redirect')}>
          Sign in using Redirect
        </span>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Button type="primary" onClick={(e) => e.preventDefault()}>
        Sign In
      </Button>
    </Dropdown>
  );
};
