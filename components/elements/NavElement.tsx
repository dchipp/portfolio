import React from 'react'

export default function NavElement({ route, text }: {route: string, text: string}) {
    return (
        <a className='hover:text-text hover:drop-shadow transition-all duration-200' href={route}>{text}</a>
    );
}