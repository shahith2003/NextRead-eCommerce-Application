import React from 'react';

function Testimonial() {
  const testimonials = [
    {
      name: 'Ana de Armas',
      title: 'Book Lover',
      message: 'NextRead has changed the way I read! Super fast delivery and an amazing selection.',
      img: 'https://i.pravatar.cc/150?img=41'
    },
    {
      name: 'Rahul Mehta',
      title: 'Student',
      message: 'Affordable prices and beautiful book covers. Love the curated recommendations.',
      img: 'data:image/jpeg;base64,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'
    },
    {
      name: 'Sarah Lewis',
      title: 'Author & Reader',
      message: 'As an author, I love how clean the design is. Great platform to showcase my books.',
      img: 'https://i.pravatar.cc/150?img=32'
    }
  ];

  return (
    <div className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4">What Our Readers Say</h2>
        <div className="row">
          {testimonials.map((t, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <p className="card-text">“{t.message}”</p>
                  <h6 className="mb-0 mt-3">{t.name}</h6>
                  <small className="text-muted">{t.title}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
