"use client";

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FieldWrapProps {
  label: string;
  error?: string;
  required?: boolean;
  id: string;
}

function FieldLabel({ label, error, required, id }: FieldWrapProps) {
  return (
    <label htmlFor={id} className="flex items-baseline justify-between px-2 text-sm font-semibold text-ink">
      <span>
        {label} {required && <span className="text-pink-deep">*</span>}
      </span>
      {error && (
        <span role="alert" className="text-xs font-medium text-pink-deep">
          {error}
        </span>
      )}
    </label>
  );
}

type ClayInputProps = FieldWrapProps & InputHTMLAttributes<HTMLInputElement>;

export const ClayInput = forwardRef<HTMLInputElement, ClayInputProps>(function ClayInput(
  { label, error, required, id, className, ...rest },
  ref,
) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <FieldLabel label={label} error={error} required={required} id={id} />
      <input
        ref={ref}
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "glass-inset w-full border-none px-5 py-3.5 text-ink placeholder:text-ink-faint outline-none transition-shadow focus:shadow-glass-pressed",
          error && "ring-2 ring-pink-deep/60",
        )}
        {...rest}
      />
    </div>
  );
});

type ClayTextareaProps = FieldWrapProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const ClayTextarea = forwardRef<HTMLTextAreaElement, ClayTextareaProps>(function ClayTextarea(
  { label, error, required, id, className, ...rest },
  ref,
) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <FieldLabel label={label} error={error} required={required} id={id} />
      <textarea
        ref={ref}
        id={id}
        required={required}
        aria-invalid={!!error}
        rows={4}
        className={cn(
          "glass-inset w-full resize-none border-none px-5 py-3.5 text-ink placeholder:text-ink-faint outline-none transition-shadow focus:shadow-glass-pressed",
          error && "ring-2 ring-pink-deep/60",
        )}
        {...rest}
      />
    </div>
  );
});

type ClaySelectProps = FieldWrapProps & SelectHTMLAttributes<HTMLSelectElement> & { options: { value: string; label: string }[]; placeholder?: string };

export const ClaySelect = forwardRef<HTMLSelectElement, ClaySelectProps>(function ClaySelect(
  { label, error, required, id, className, options, placeholder, ...rest },
  ref,
) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <FieldLabel label={label} error={error} required={required} id={id} />
      <select
        ref={ref}
        id={id}
        required={required}
        aria-invalid={!!error}
        defaultValue={rest.value === undefined ? "" : undefined}
        className={cn(
          "glass-inset w-full border-none px-5 py-3.5 text-ink outline-none transition-shadow focus:shadow-glass-pressed",
          error && "ring-2 ring-pink-deep/60",
        )}
        {...rest}
      >
        <option value="" disabled>
          {placeholder ?? "Select an option"}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
});
