export const textCutter = (text: string, textLengthValidAmount: number) => {
  
  if (!text) {
    throw new Error(
      "The textCutter helper error, doesn't have a text property.."
    );
  }

  if (text?.length > textLengthValidAmount) {
    let previewText = text.slice(0, textLengthValidAmount);
    const lastSpaceIndex = previewText.lastIndexOf(" ");
    if (lastSpaceIndex !== -1) {
      previewText = previewText.slice(0, lastSpaceIndex).replace(/\W+$/, "");
    }
    return { previewText, moreText: text.slice(lastSpaceIndex + 1) };
  }
  return false;
};
