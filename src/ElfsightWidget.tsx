import type { HTMLAttributes } from 'react';
import React, { memo, useEffect } from 'react';
import { useLoadPlatform } from './useLoadPlatform';

export type ElfsightWidgetProps =
  | ModernElfsightWidgetProps
  | LegacyElfsightWidgetProps;

export interface ModernElfsightWidgetProps extends BaseElfsightWidgetProps {
  /**
   * @deprecated since 1.1.0, please use widgetId instead
   * */
  widgetID?: never;
  widgetId: string;
}

export interface LegacyElfsightWidgetProps extends BaseElfsightWidgetProps {
  /**
   * @deprecated since 1.1.0, please use widgetId instead
   * */
  widgetID: string;
  widgetId?: never;
}

export interface BaseElfsightWidgetProps
  extends HTMLAttributes<HTMLDivElement> {
  lazy?: boolean | NamedLazyMode;
  modern?: boolean;
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
  modern = false,
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

  useLoadPlatform(modern);

  const finalWidgetId = widgetId ?? widgetID;
  let effectiveClassName = `elfsight-app-${finalWidgetId}`;
  if (className) {
    effectiveClassName += ` ${className}`;
  }

  let effectiveLazy: string | undefined;
  if (typeof lazy === 'boolean') {
    effectiveLazy = lazy ? 'default' : undefined;
  } else {
    effectiveLazy = lazy;
  }

  return (
    <div
      className={effectiveClassName}
      data-elfsight-app-lazy={effectiveLazy}
      {...forwardedProps}
    />
  );
});
