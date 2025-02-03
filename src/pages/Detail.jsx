import React from "react";
import { useNavigate, useLocation, Link, useParams } from "react-router-dom";
const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  console.log("params_id->", params.id);

  const data = [
    { id: 1, thing: "react1" },
    { id: 2, thing: "react2" },
    { id: 3, thing: "react3" },
    { id: 4, thing: "react4" },
  ];

  const targetDetail = data.find(function (detail) {
    return detail.id == params.id;
  });
  console.log("target->", targetDetail);
  return (
    <div>
      <h1>Detail</h1>
      <div>
        현재페이지: {location.pathname.slice(1)} or {targetDetail.thing}
      </div>
      {data.map((detail) => {
        return (
          <div key={detail.id}>
            <div>item: {detail.id}</div>
            <Link to={`/detail/${detail.id}`}>
              <span>goto: {detail.thing}</span>
            </Link>
          </div>
        );
      })}
      <Link to={"/"}>
        <span>goto home</span>
      </Link>
    </div>
  );
};
export default Detail;
