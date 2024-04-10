import React from 'react';
import { useMsal } from '@azure/msal-react';
import { Button, Dropdown } from 'antd';

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType) => {
    if (logoutType === 'popup') {
      instance.logoutPopup({
        postLogoutRedirectUri: '/',
        mainWindowRedirectUri: '/',
      });
    } else if (logoutType === 'redirect') {
      instance.logoutRedirect({
        postLogoutRedirectUri: '/',
      });
    }
  };

  const items = [
    {
      key: '3',
      label: (
        <span onClick={() => handleLogout('popup')}> Sign out using Popup</span>
      ),
    },
    {
      key: '4',
      label: (
        <span onClick={() => handleLogout('redirect')}>
          Sign out using Redirect
        </span>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Button type="primary" onClick={(e) => e.preventDefault()}>
        Sign Out
      </Button>
    </Dropdown>
  );
};
