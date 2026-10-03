import { notFound } from "next/navigation";

export const paginationHandler = (currentPage, totalPage) => {
  let isValid = true;

  if (currentPage > totalPage || currentPage <= 0) {
    isValid = false;
  }
  if (!parseInt(currentPage) && currentPage) {
    isValid = false;
  }

  if (!isValid) {
    notFound();
  }

  return;
};
