export const RatingTool = (rating) => {
  return [...Array(5)].map((_, index) => (
    <i
      key={index}
      className={`fa fa-star ${index < rating ? "rated" : ""}`}
    ></i>
  ));
};
