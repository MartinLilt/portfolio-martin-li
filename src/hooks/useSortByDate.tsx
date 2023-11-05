import { IResumePreview } from "@/interfaces";

export function useSortByDate(optionsArray: IResumePreview[]) {
  if (!optionsArray || !Array.isArray(optionsArray)) {
    throw new Error("useSortByDate hook error..");
  }

  const isValidDate = (dateString: string) => {
    const dateRegex = /^[A-Z][a-z]{2} (20\d{2})$/;
    return dateRegex.test(dateString);
  };

  const isValidEntry = (entry: IResumePreview) => {
    return (
      entry.date &&
      entry.date.startDate &&
      isValidDate(entry.date.startDate) &&
      entry.date.endDate &&
      isValidDate(entry.date.endDate)
    );
  };

  const validOptions = optionsArray.filter(isValidEntry);

  if (!validOptions.length) {
    return [optionsArray, null];
  }

  const parseDate = (dateString: string) => {
    const [month, year] = dateString.split(" ");
    const monthDate = new Date(Date.parse("1 " + month + " 2000"));
    const yearDate = new Date(parseInt(year), monthDate.getMonth(), 1);
    return yearDate;
  };

  try {
    const sortedOptions = [...validOptions].sort(
      (a, b) =>
        parseDate(b.date.startDate).getTime() -
        parseDate(a.date.startDate).getTime()
    );
    return [sortedOptions, null];
  } catch (error) {
    return [optionsArray, error];
  }
}