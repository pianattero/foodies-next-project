'use client';

export default function Error({ error }) {
    return <main className="error">
        {/* no importo 'classes' porque la clase *error* esta declarada en global.css */}
        <h1>An error occurred!</h1>
        <p>Failed to fetch meal data. Please try again later.</p>
    </main>
}