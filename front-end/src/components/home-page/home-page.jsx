import React from 'react'
import { Link } from 'react-router'

export default function HomePage() {
    return (
        <div>
            <Link to="/games"><p>Список игр</p></Link>
            <Link to="/guides"><p>Список гайдов</p></Link>
            <Link to="/home"><p>Как использовать</p></Link>
        </div>
    )
}
