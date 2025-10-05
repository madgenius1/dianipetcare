



export default function PageHeader({ bgImage = '/default-image.webp', title = 'Welcome to Diani Pet Care' }) {
    return (
        <div
            className="py-16 md:py-24 lg:py-30 bg-center bg-cover bg-no-repeat relative overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-start justify-start">
                    <h3 className="text-2xl lg:text-5xl text-white font-semibold">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    )
}
