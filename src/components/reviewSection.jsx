import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/reviewSection.css";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      employer: "John Doe",
      company: "ABC Corporation",
      review:
        "Mantel Technology Scanners Nig. Ltd. has been a valuable partner in our business. Their expertise and professionalism have helped us streamline our operations and improve our bottom line.",
      image: "images/logo.png",
    },
    {
      id: 2,
      employer: "Jane Smith",
      company: "XYZ Inc.",
      review:
        "We have been working with Mantel Technology Scanners Nig. Ltd. for several years and have always been impressed with their dedication to excellence and customer satisfaction.",
      image: "images/about-us-image.png",
    },
    {
      id: 3,
      employer: "Bob Johnson",
      company: " DEF Enterprises",
      review:
        "Mantel Technology Scanners Nig. Ltd. has provided us with top-notch service and support. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure our needs are met.",
      image: "images/review3.jpg",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    employer: "",
    company: "",
    review: "",
    image: "",
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    const newReviews = [...reviews, newReview];
    setReviews(newReviews);
    setNewReview({
      employer: "",
      company: "",
      review: "",
      image: "",
    });
    setShowForm(false);
  };

  return (
    <section className="review-section py-5 bg-light">
      <Container>
        <Row>
          <Col md={10} sm={10}>
            <h2>What our employers have to say!</h2>
          </Col>
          <Col md={2} sm={2}>
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              <i className="fas fa-plus"></i> Add Review
            </button>
          </Col>
        </Row>
        {showForm && (
          <Row>
            <Col md={12} sm={12}>
              <form onSubmit={handleAddReview}>
                <div className="form-group">
                  <label>Employer:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newReview.employer}
                    onChange={(e) =>
                      setNewReview({ ...newReview, employer: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Company:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newReview.company}
                    onChange={(e) =>
                      setNewReview({ ...newReview, company: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Review:</label>
                  <textarea
                    className="form-control"
                    value={newReview.review}
                    onChange={(e) =>
                      setNewReview({ ...newReview, review: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Image:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newReview.image}
                    onChange={(e) =>
                      setNewReview({ ...newReview, image: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Review
                </button>
              </form>
            </Col>
          </Row>
        )}
        <Row>
          {reviews.map((review) => (
            <Col md={4} sm={12} key={review.id}>
              <div className="review-card">
                <img
                  src={review.image}
                  alt={review.employer}
                  className="review-image"
                />
                <p className="review-text">{review.review}</p>
                <p className="review-author">
                  - {review.employer}, {review.company}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ReviewSection;
