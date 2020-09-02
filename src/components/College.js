import React from "react";

export const College = props => {
  // console.log(props);
  const {
    college_name,
    promoted,
    discount,
    original_fees,
    discounted_fees,
    fees_cycle,
    ranking,
    tags,
    amenties,
    rating,
    rating_remarks,
    nearest_place,
    famous_nearest_places,
    offertext
  } = props.college;
  // console.log(
  //   college_name,
  //   promoted,
  //   discount,
  //   original_fees,
  //   discounted_fees,
  //   fees_cycle,
  //   ranking,
  //   tags,
  //   amenties,
  //   rating,
  //   rating_remarks,
  //   nearest_place,
  //   famous_nearest_places,
  //   offertext
  // );

  return (
    <div className="is_college_wrapper">
      {promoted && <div className="is_promoted">PROMOTED</div>}
      <div className="college-header">
        <div className="rating">
          <div className="rating-no">
            <span>{rating}</span>
            /5
          </div>
          <div>{rating_remarks}</div>
        </div>
        <div className="tag-container">
          {tags
            ? tags.map((tag, i) => (
                <span key={tag + i} className="tag">
                  {tag}
                </span>
              ))
            : ""}
        </div>
        <div className="ranking-text">#{ranking}</div>
      </div>
      <div className="college-info">
        <div className="college-details">
          <div className="college-name">{college_name}</div>
          <div className="college-fees">
            <strike> {`₹${original_fees}`} </strike>
            <span>{discount}</span>
          </div>
        </div>
        <div className="college-knowhows">
          <div className="nearest-places">
            {nearest_place && nearest_place.join("  |  ")}
          </div>
          <div className="discounted-fee">
            <span>₹ {discounted_fees}</span>
            <sub>{fees_cycle}</sub>
          </div>
          <div className="famous-nearest-places">{famous_nearest_places}</div>
        </div>
        <div className="college-extra-info">
          <div className="offer-text">{offertext}</div>
          <div className="amenties">{amenties && amenties.join(" - ")}</div>
        </div>
      </div>
    </div>
  );
};
