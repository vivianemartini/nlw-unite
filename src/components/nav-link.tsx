import { NavLinkProps } from './nav-link.type';

export function NavLink(props: NavLinkProps) {
    return (
        <a {...props} className='font-medium text-sm text-zinc-300'>
            {props.children}
        </a>
    )
}