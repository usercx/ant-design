import * as React from 'react';

export type NotificationPlacement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';

export type IconType = 'success' | 'info' | 'error' | 'warning';

export interface ArgsProps {
  message: React.ReactNode;
  description?: React.ReactNode;
  btn?: React.ReactNode;
  key?: string;
  onClose?: () => void;
  duration?: number | null;
  icon?: React.ReactNode;
  placement?: NotificationPlacement;
  style?: React.CSSProperties;
  className?: string;
  readonly type?: IconType;
  onClick?: () => void;
  closeIcon?: React.ReactNode;
}

export interface NotificationInstance {
  success(args: ArgsProps): void;
  error(args: ArgsProps): void;
  info(args: ArgsProps): void;
  warning(args: ArgsProps): void;
  open(args: ArgsProps): void;
  close(key: React.Key): void;
  destroy(): void;
}

export interface GlobalConfigProps {
  top?: number;
  bottom?: number;
  duration?: number;
  prefixCls?: string;
  getContainer?: () => HTMLElement;
  placement?: NotificationPlacement;
  closeIcon?: React.ReactNode;
  rtl?: boolean;
  maxCount?: number;
}

export interface NotificationConfig {
  top?: number;
  bottom?: number;
  prefixCls?: string;
  getContainer?: () => HTMLElement;
  maxCount?: number;
  rtl?: boolean;
}
