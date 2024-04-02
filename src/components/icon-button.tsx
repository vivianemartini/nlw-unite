import { twMerge } from 'tailwind-merge';
import { IconButtonProps } from './icon-button.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function IconButton({ transparent, ...props }: IconButtonProps) {
    return (
        <button
            {...props}
            className={twMerge(
                'border border-white/10 rounded-md p-1.5',
                transparent ? 'bg-black/20' : 'bg-white/10',
                props.disabled ? 'opacity-50' : null,
            )}
        />
    )
}