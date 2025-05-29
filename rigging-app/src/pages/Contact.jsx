import React from 'react';

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                <p className="mb-8 text-gray-400">We’d love to hear from you! Reach out anytime through the links below.</p>

                <div className="space-y-4 text-lg">
                    <p>
                        📧 Email: <a href="mailto:info@buildrightacademy.us" className="text-yellow-400 hover:underline">info@buildrightacademy.us</a>
                    </p>
                    <p>
                        🌐 Website: <a href="https://buildrightacademy.us" target="_blank" className="text-yellow-400 hover:underline">buildrightacademy.us</a>
                    </p>
                    <p>
                        📸 Instagram: <a href="https://www.instagram.com/buildrightacademy" target="_blank" className="text-yellow-400 hover:underline">@buildrightacademy</a>
                    </p>
                    <p>
                        📘 Facebook: <a href="https://www.facebook.com/profile.php?id=61576774372084" target="_blank" className="text-yellow-400 hover:underline">BuildRight Academy</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
