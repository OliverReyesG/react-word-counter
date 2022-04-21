const LegacyUi = () => {
  return (
    <div className="App">
      <h2>Word Counter (By: Oliver Reyes)</h2>
      <h5>Characters: {charCount}</h5>
      <h5>Words: {wordCount}</h5>
      <h5>Sentences: {sentenceCount}</h5>
      <h5>Paragraphs: {paragraphCount}</h5>

      <textarea
        name="textInput"
        id="textInput"
        cols="30"
        rows="10"
        value={text}
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
};
