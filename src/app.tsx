import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
require('dotenv').config();
import App from "@/components/App";
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: process.env.APPLICATION_ID ?? '',
    clientToken: process.env.CLIENT_TOKEN ?? '',
    site: 'datadoghq.com',
    service: 'react-boilerplate',
    env: 'staging',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});


const container = document.getElementById("app");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
