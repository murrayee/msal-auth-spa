'use client';

import React from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import PageLayout from './components/PageLayout';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, Divider, theme } from 'antd';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react';
import { ProfileContent } from './components/ProfileContent';

const msalInstance = new PublicClientApplication(msalConfig);

const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h5>
          <center>Please sign-in to see your profile information.</center>
        </h5>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default function Home() {
  return (
    <MsalProvider instance={msalInstance}>
      <ConfigProvider
        theme={{
          cssVar: true,
          algorithm: [theme.defaultAlgorithm],
        }}
      >
        <StyleProvider hashPriority="high">
          <PageLayout>
            <MainContent />
          </PageLayout>
        </StyleProvider>
      </ConfigProvider>
    </MsalProvider>
  );
}
