import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
  };

type ButtonAsLink = BaseProps & {
  to: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-fg hover:bg-primary-hover shadow-sm',
  secondary: 'bg-secondary text-secondary-fg hover:opacity-90 shadow-sm',
  outline: 'border border-border bg-surface text-fg hover:bg-surface-elevated',
  ghost: 'text-fg hover:bg-surface-elevated',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className = '' } = props;
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if (typeof props.to === 'string') {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    type: props.type ?? 'button',
    disabled: props.disabled,
    onClick: props.onClick,
    'aria-label': props['aria-label'],
    id: props.id,
    name: props.name,
  };

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
