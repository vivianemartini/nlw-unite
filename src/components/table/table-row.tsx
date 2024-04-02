import { TableRowProps } from './table-row.types';

export function TableRow(props: TableRowProps) {
    return (
        <tr className='border-b border-white/10 hover:bg-white/5' {...props} />
    )
}