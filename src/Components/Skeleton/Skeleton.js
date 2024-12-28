import "./Skeleton.css";

const Skeleton = ({ count }) => {
  return (
    <>
      {[...Array(count)].map((item) => (
        <div className="col">
          <div className="skeleton-con">
            <div className="skeleton-img"></div>
            <p className="p-skeleton"></p>
            <p className="p-skeleton"></p>
            <p className="p-skeleton"></p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
