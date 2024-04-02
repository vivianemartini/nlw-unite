import { TableProps } from './table.types'

export function Table(props: TableProps) {
    return (
        <div className='border border-white/10 rounded-lg'>
            <table className='w-full' {...props} />

        </div>
    )
}