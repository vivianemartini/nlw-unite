import { IconButtonProps } from './icon-button.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function IconButton({ transparent, ...props }: IconButtonProps) {
    return (
        <button
            {...props}
            className={
                transparent
                    ? 'bg-black/20 border border-white/10 rounded-md p-1.5'
                    : 'bg-white/10 border border-white/10 rounded-md p-1.5'
            }
        />
    )
}