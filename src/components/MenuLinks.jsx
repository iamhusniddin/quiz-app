import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

//custom hooks
import { useFetch } from "../hooks/useFetch";

//rrd imports
import { Link } from "react-router-dom";

function MenuLinks() {
  // const {
  //   data: quizzes,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:3000/quizzes");

  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch("/api/project/frontend-quizbyme/quizzes");

  return (
    <div>
      {isPending && (
        <DotLottieReact
          src="https://lottie.host/1b75e0eb-537c-45b2-ab21-570f1ace4cba/7CuxYdEc70.lottie"
          loop
          autoplay
        />
      )}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((item) => {
            return (
              <Link
                to={`/quiz/${item.title}`}
                key={item.title}
                className="menu-item header-logo"
              >
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt={item.title} />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
