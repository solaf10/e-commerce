import { useState } from "react";

const useNewGet = (endPoint) => {
  const [data, setData] = useState();
  endPoint()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return [data];
};

export default useNewGet;
