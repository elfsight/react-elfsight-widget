import React, { memo } from 'react';
import { useLoadPlatform } from './utils';

export interface ElfsightWidgetProps {
  widgetID: string;
}

function _ElfsightWidget({ widgetID }: ElfsightWidgetProps) {
  useLoadPlatform();
  return <div className={`elfsight-app-${widgetID}`}></div>;
}

export const ElfsightWidget = memo(_ElfsightWidget);
