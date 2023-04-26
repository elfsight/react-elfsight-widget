import React from 'react';
import { render } from '@testing-library/react';
import { ElfsightWidget } from '../../src/ElfsightWidget';

describe('ElfsightWidget', () => {
  afterEach(() => {
    const platformScript = document.querySelector(
      '[data-testid="platform-script"]'
    );
    if (platformScript) {
      platformScript.remove();
    }
  });

  it('adds platform.js script once', () => {
    function Page() {
      return (
        <>
          <ElfsightWidget widgetId="06c7c0f6-d7f0-4e4a-8076-91d34b914d79" />
          <ElfsightWidget widgetId="116b31fb-93e6-4830-b089-0ec49171f6ff" />
        </>
      );
    }
    render(<Page />);
    const platformScripts = document.querySelectorAll(
      '[data-testid="platform-script"]'
    );
    expect(platformScripts).toHaveLength(1);
  });

  it('adds platform.js in legacy dashboard mode', () => {
    function Page() {
      return <ElfsightWidget widgetId="06c7c0f6-d7f0-4e4a-8076-91d34b914d79" />;
    }
    render(<Page />);
    const platformScript = document.querySelector(
      '[data-testid="platform-script"]'
    )!;
    expect(platformScript.hasAttribute('data-use-service-core')).toBeFalsy();
  });

  it('adds platform.js in modern dashboard mode', () => {
    function Page() {
      return (
        <ElfsightWidget
          widgetId="06c7c0f6-d7f0-4e4a-8076-91d34b914d79"
          modern
        />
      );
    }
    render(<Page />);
    const platformScript = document.querySelector(
      '[data-testid="platform-script"]'
    )!;
    expect(platformScript.getAttribute('data-use-service-core')).toBe('');
  });

  it('renders a widget container', () => {
    function Page() {
      return <ElfsightWidget widgetId="06c7c0f6-d7f0-4e4a-8076-91d34b914d79" />;
    }
    render(<Page />);
    const widgetContainer = document.querySelector(
      '.elfsight-app-06c7c0f6-d7f0-4e4a-8076-91d34b914d79'
    );
    expect(widgetContainer).toBeInstanceOf(Element);
  });

  it('renders a widget container in standard mode', () => {
    function Page() {
      return <ElfsightWidget widgetId="06c7c0f6-d7f0-4e4a-8076-91d34b914d79" />;
    }
    render(<Page />);
    const widgetContainer = document.querySelector(
      '.elfsight-app-06c7c0f6-d7f0-4e4a-8076-91d34b914d79'
    )!;
    expect(widgetContainer.hasAttribute('data-elfsight-app-lazy')).toBeFalsy();
  });

  it('renders a widget container in default lazy mode', () => {
    function Page() {
      return (
        <ElfsightWidget widgetId="06c7c0f6-d7f0-4e4a-8076-91d34b914d79" lazy />
      );
    }
    render(<Page />);
    const widgetContainer = document.querySelector(
      '.elfsight-app-06c7c0f6-d7f0-4e4a-8076-91d34b914d79'
    )!;
    expect(widgetContainer.getAttribute('data-elfsight-app-lazy')).toBe(
      'default'
    );
  });

  it('renders a widget container in specified lazy mode', () => {
    function Page() {
      return (
        <ElfsightWidget
          widgetId="06c7c0f6-d7f0-4e4a-8076-91d34b914d79"
          lazy="first-activity"
        />
      );
    }
    render(<Page />);
    const widgetContainer = document.querySelector(
      '.elfsight-app-06c7c0f6-d7f0-4e4a-8076-91d34b914d79'
    )!;
    expect(widgetContainer.getAttribute('data-elfsight-app-lazy')).toBe(
      'first-activity'
    );
  });

  it('passes other props to a widget container', () => {
    function Page() {
      return (
        <ElfsightWidget
          widgetId="06c7c0f6-d7f0-4e4a-8076-91d34b914d79"
          className="my-custom-widget"
          style={{ fontFamily: 'Arial' }}
        />
      );
    }
    render(<Page />);
    const widgetContainer = document.querySelector(
      '.elfsight-app-06c7c0f6-d7f0-4e4a-8076-91d34b914d79'
    )!;
    expect(widgetContainer.classList.contains('my-custom-widget')).toBeTruthy();
    expect(widgetContainer.getAttribute('style')).toBe('font-family: Arial;');
  });
});
