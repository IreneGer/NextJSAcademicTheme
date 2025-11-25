import { useState } from 'react';
import { NextPage } from 'next';

const Misc: NextPage<unknown> = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mt-12">

            <p className="text-gray-700 text-justify mb-6">
            You can download my CV here. 
            </p>

            {/* CV Download Button */}
            <a
                href="CV_Germani.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition mb-6"
            >
                Download CV
            </a>
        </div>
    );
};

export default Misc;

