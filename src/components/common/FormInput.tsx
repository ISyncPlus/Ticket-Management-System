import { forwardRef } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  multiline?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  ({ label, error, id, multiline, ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${inputId}-error`;

    return (
      <div className="space-y-2">
        <Label htmlFor={inputId} className="text-[#E0E0E0]">{label}</Label>
        {multiline ? (
          <Textarea
            id={inputId}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={`rounded-[1em] border-[#C0B7E8]/10 bg-[#302C42] text-[#E0E0E0] placeholder:text-[#B1B1B1] ${error ? 'border-red-500' : ''}`}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <Input
            id={inputId}
            ref={ref as React.Ref<HTMLInputElement>}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={`rounded-[1em] border-[#C0B7E8]/10 bg-[#302C42] text-[#E0E0E0] placeholder:text-[#B1B1B1] ${error ? 'border-red-500' : ''}`}
            {...props}
          />
        )}
        {error && (
          <p id={errorId} className="text-red-400 text-sm" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';