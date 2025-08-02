import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <>
    <Navbar />
    <div className="container mt-5 py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About NextRead</h1>
        <p className="text-muted">
          Your one-stop destination for discovering your next favorite book.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Our Mission"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-semibold">Our Mission</h3>
          <p>
            At <strong>NextRead</strong>, our mission is to make books accessible to everyone. 
            Whether you're into mystery, fiction, biographies, or learning something new, we provide 
            a wide range of books that fuel imagination and knowledge.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Why Choose Us"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-semibold">Why Choose NextRead?</h3>
          <ul className="list-unstyled">
            <li>✔ Curated book recommendations</li>
            <li>✔ Seamless browsing experience</li>
            <li>✔ Regularly updated catalog</li>
            <li>✔ Easy navigation by genre or author</li>
          </ul>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="text-center mb-4">
        <h3 className="fw-semibold">Meet the Team</h3>
        <p className="text-muted">Passionate readers and developers behind NextRead</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 text-center mb-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Team Member"
            className="rounded-circle mb-3"
            width="120"
            height="120"
          />
          <h5 className="fw-bold mb-1">Shahith</h5>
          <p className="text-muted mb-0">Founder</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img
            src="https://i.pravatar.cc/150?img=13"
            alt="Team Member"
            className="rounded-circle mb-3"
            width="120"
            height="120"
          />
          <h5 className="fw-bold mb-1">Mushraf</h5>
          <p className="text-muted mb-0">Network Engineer</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img
            src="https://i.pravatar.cc/150?img=60"
            alt="Team Member"
            className="rounded-circle mb-3"
            width="120"
            height="120"
          />
          <h5 className="fw-bold mb-1">Salman</h5>
          <p className="text-muted mb-0">UI/UX Designer</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img
            src="https://i.pravatar.cc/150?img=14"
            alt="Team Member"
            className="rounded-circle mb-3"
            width="120"
            height="120"
          />
          <h5 className="fw-bold mb-1">Nihal</h5>
          <p className="text-muted mb-0">Full-Stack Developer</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default AboutPage