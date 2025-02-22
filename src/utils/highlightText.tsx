export const highlightText = (text: string, wordsToHighlight: string[]) => {
  if (!wordsToHighlight.length) return text;

  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");
  return (
    <>
      {text.split(regex).map((part, index) =>
        wordsToHighlight.includes(part.toLowerCase()) ? (
          <span key={index} className="bg-yellow-300 px-1">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};
