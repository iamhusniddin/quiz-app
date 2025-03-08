import React, { useEffect } from "react";

//rrd imports
import { useParams } from "react-router-dom";

//custom hooks
import { useFetch } from "../hooks/useFetch";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

//components
import Test from "../components/Test";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://json-api.uz/api/project/frontend-apii/quizzes?title=${title}`
  );

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  return (
    <section className="quiz-container container">
      {isPending && <DotLottieReact />}
      {error && <h3>{error}</h3>}
      {quizzes && <Test questions={quizzes.data[0]} />}
    </section>
  );
}

export default Quiz;
