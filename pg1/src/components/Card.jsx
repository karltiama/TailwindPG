import { useState } from 'react';

function Card() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the email submission here, e.g., send it to your server or a third-party service
        console.log(email);
    };

    return (
        <div className="relative flex flex-col items-center bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <img className="self-center mb-4" src="/images/logo1.png" alt="Logo" />

            <blockquote className="mt-4 text-gray-600 italic">
                <p>"To fathom hell or go angelic just take a pinch of psychedelic"</p>
                <cite className="mt-2 text-gray-500">— Aldous Huxley</cite>
            </blockquote>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">About Us</h2>
                <p className="mt-4 text-gray-600">
                Mifunghi was founded in 2022 by a group whose founding member is a mental health patient who saw the need for safe quality psychedelics for healing transformative non ordinary states of conscious that have revolutionary potential to progress mental health we look to not only provide safe tools for exploration from the psychiatric exploration to the avid physco-nut to the shamans guiding in spiritual journeys

                </p>
            </div>

            <form className="mt-8 w-full" onSubmit={handleSubmit}>
                <label htmlFor="email" className="sr-only">
                    Email address
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}

export default Card;