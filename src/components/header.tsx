import { NavLink } from './nav-link';

export function Header() {
    return (
        <div className='flex items-center gap-5 py-2'>
            <img src="src/assets/logo.png" alt="logo" />

            <nav className='flex items-center gap-5'>
                <NavLink href="/participantes">Participantes</NavLink>
                <NavLink href="/eventos">Eventos</NavLink>
            </nav>
        </div>
    )
}