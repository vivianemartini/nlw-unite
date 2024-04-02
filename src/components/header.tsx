export function Header() {
    return (
        <div className='flex items-center gap-5 py-8'>
            <img src="../../assets/logo.png" alt="logo" />

            <nav className='flex items-center gap-5'>
                <a href="" className='font-medium text-sm text-zinc-300'>Eventos</a>
                <a href="" className='font-medium text-sm'>Participantes</a>
            </nav>
        </div>
    )
}