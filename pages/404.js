import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="text-center p-32 m-8">
            <h1 className="text-5xl mb-4">
                404
            </h1>
            <p>
                That&apos;s an error.
            </p>
            <p className="mt-4">
                <Link href="/">
                    <a className="hover:underline">
                        Go back to the homepage
                    </a>
                </Link>
            </p>
        </div>
    )
}