import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { ElfsightWidget } from '../../src/ElfsightWidget';

describe('ElfsightWidget', () => {
  it('should add Platform script', async () => {
    function Page() {
      return <ElfsightWidget widgetID="06c7c0f6-d7f0-4e4a-8076-91d34b914d79" />;
    }

    render(<Page />);

    await waitFor(() => {
      const platformScriptElement = document.querySelector(
        'script[src="https://apps.elfsight.com/p/platform.js"]'
      );

      expect(platformScriptElement).toBeTruthy();
    });
  });

  it('should render a widget container', async () => {
    function Page() {
      return <ElfsightWidget widgetID="116b31fb-93e6-4830-b089-0ec49171f6ff" />;
    }

    render(<Page />);

    await waitFor(() => {
      const widgetContainerElement = document.querySelector(
        '.elfsight-app-116b31fb-93e6-4830-b089-0ec49171f6ff'
      );

      expect(widgetContainerElement).toBeTruthy();
    });
  });

  it('should not add Platform script multiple times', async () => {
    function Page() {
      return (
        <>
          <ElfsightWidget widgetID="21a3c57c-c113-4846-be89-b51f8ae2fe1e" />
          <ElfsightWidget widgetID="70709362-c732-42b9-814a-2c007b083d6b" />
          <ElfsightWidget widgetID="36923c89-b48d-4475-adaa-427e17382cea" />
        </>
      );
    }

    render(<Page />);

    await waitFor(() => {
      const platformScriptElements = document.querySelectorAll(
        'script[src="https://apps.elfsight.com/p/platform.js"]'
      );

      expect(platformScriptElements).toHaveLength(1);
    });
  });
});
