import type { HTMLAttributes } from 'react';
import React, { memo, useEffect } from 'react';
import { useLoadPlatform } from './useLoadPlatform';

export interface ElfsightWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @deprecated since 1.1.0, please use widgetId instead
   *
   * Widget identifier (deprecated).
   * Use `widgetId` instead.
   */
  widgetID?: never;

  /**
   * Widget identifier.
   * The unique identifier for the widget, obtained from the installation code.
   * Example: `elfsight-app-85d18ddb-c202-421e-9a88-6c099d7a7833` → `85d18ddb-c202-421e-9a88-6c099d7a7833`.
   */
  widgetId: string;

  /**
   * Enables lazy loading.
   * Accepts a boolean or a mode.
   */
  lazy?: boolean | NamedLazyMode;
}

export type NamedLazyMode =
  | `default`
  | 'first-activity'
  | 'in-viewport'
  | 'disabled';

export const ElfsightWidget = memo(function ElfsightWidget({
  widgetId,
  widgetID,
  lazy,
  className,
  ...forwardedProps
}: ElfsightWidgetProps) {
  useEffect(() => {
    if (widgetID) {
      console.debug(
        'Note that widgetID is deprecated since version 1.1.0. Please use widgetId instead.'
      );
    }
  }, [widgetID]);

  useLoadPlatform();

  const finalWidgetId = widgetId ?? widgetID;
  const widgetClassName = `elfsight-app-${finalWidgetId}`;

  let effectiveLazy: string | undefined;
  if (typeof lazy === 'boolean') {
    effectiveLazy = lazy ? 'default' : undefined;
  } else {
    effectiveLazy = lazy;
  }

  return (
    <div
      className={[widgetClassName, className].filter(Boolean).join(' ')}
      data-elfsight-app-lazy={effectiveLazy}
      {...forwardedProps}
    />
  );
});
