export function Table() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-3 items-center'>
                <div className='w-full border border-white/10 rounded-lg'>
                    <table className='w-full'>
                        <thead>
                            <tr className='border-b border-white/10'>
                                <th className='py-3 px-4 text-sm font-semibold text-left'>
                                    <input type="checkbox" />
                                </th>
                                <th className='py-3 px-4 text-sm font-semibold text-left'>Código</th>
                                <th className='py-3 px-4 text-sm font-semibold text-left'>Participante</th>
                                <th className='py-3 px-4 text-sm font-semibold text-left'>Data da inscrição</th>
                                <th className='py-3 px-4 text-sm font-semibold text-left'>Data do check-in</th>
                                <th className='py-3 px-4 text-sm font-semibold text-left'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 8 }).map((_, i) => {
                                return (
                                    <tr key={i} className='border-b border-white/10'>
                                        <td className='py-3 px-4 text-sm text-zinc-300'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='py-3 px-4 text-sm text-zinc-300'>12383</td>
                                        <td className='py-3 px-4 text-sm text-zinc-300' >
                                            <div className='flex flex-col gap-1'>
                                                <span className='font-semibold text-white'>Viviane Martini</span>
                                                <span>martini.viviane@gmail.com</span>
                                            </div>
                                        </td>
                                        <td className='py-3 px-4 text-sm text-zinc-300'>7 dias atrás</td>
                                        <td className='py-3 px-4 text-sm text-zinc-300'>3 dias atrás</td>
                                        <td className='py-3 px-4 text-sm text-zinc-300'></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>Mostrando 10 de 228 items</td>
                                <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>Página 1 de 10</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}