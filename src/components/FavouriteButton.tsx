import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { AiOutlinePlus } from "react-icons/ai";

interface FavouriteButtonProps {
  movieId: string;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ movieId }) => {
  return (
    <div
      className="
    cursor-pointer
    group/item
    w-6 lg:w-10
    h-6 lg:h-10
    border-white
    border-2
    rounded-full
    flex
    justify-center
    items-center
    transition
    hover:border-neutral-300
  "
    >
      <AiOutlinePlus className="text-white" size={30} />
    </div>
  );
};

export default FavouriteButton;
