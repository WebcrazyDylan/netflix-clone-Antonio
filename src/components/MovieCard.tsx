import React from "react";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img className="" src={data.thumbnail} alt="Movie Thumbnail" />
    </div>
  );
};

export default MovieCard;
