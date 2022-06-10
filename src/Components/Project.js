import React from "react";

export default function Project(props) {
  return (
    <div>
      <h2 className="text-3xl pb-2 text-emerald-300 underline underline-offset-4 decoration-zinc-300">
        {props.title}
      </h2>
      <p className="text-lg pb-1">
        <span className="bold">Front-End: </span>
        {props.front}
      </p>
      {!props.back ? (
        <p></p>
      ) : (
        <p className="text-lg pb-1">
          <span className="bold">Back-End: </span>
          {props.back}
        </p>
      )}
      <p className="pb-2 text-md">{props.details}</p>
      <img src={props.img} alt={props.title} className="h-50vh w-full" />
      <div className="mt-6">
        <a
          className="w-100 text-white font-bold rounded-md bg-emerald-500 px-8 py-2"
          target="_blank"
          rel="noopener noreferrer"
          href={props.live}
        >
          Live
        </a>
        {!props.repo ? null : (
          <a
            className="w-100 text-white font-bold rounded-md bg-emerald-500 px-8 py-2 mx-2"
            target="_blank"
            rel="noopener noreferrer"
            href={props.repo}
          >
            Repo
          </a>
        )}
      </div>
    </div>
  );
}
