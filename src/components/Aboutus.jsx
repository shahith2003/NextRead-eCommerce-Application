import React from 'react'
import abouimg from '../assets/about.png'

function Aboutus() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="mb-4">About NextRead</h1>
                    <p className="lead">
                        At <strong>NextRead</strong>, we believe that every story deserves a reader, and every reader deserves a story.
                        We are passionate about bringing books closer to people no matter where they are.
                    </p>
                    <p>
                        Born from a love of nostalgia and the timeless joy of reading, NextRead was created for those who miss the days when stories weren’t streamed or scrolled, but discovered one page at a time.
                    </p>
                    <p>
                        Our platform showcases a wide range of genres from fiction, non-fiction, children’s books, to self-help and smart reads carefully curated to match your taste.
                    </p>
                    <p>
                        Because some stories deserve to be felt, not just read.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img src={abouimg} alt="About NextRead" className="img-fluid rounded" />
                </div>
            </div>
        </div>

    )
}

export default Aboutus