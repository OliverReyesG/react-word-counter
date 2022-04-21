import { useState, useEffect } from 'react';

const useCountText = (text) => {
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const sentenceRegExp = new RegExp('[\\.;]');

  const filterCriteria = (value) => {
    return value != '';
  };

  useEffect(() => {
    setCharCount(text.length);
    setWordCount(text.split(' ').filter(filterCriteria).length);
    setSentenceCount(text.split(sentenceRegExp).filter(filterCriteria).length);
    setParagraphCount(text.split('\n').filter(filterCriteria).length);
  }, [text]);

  return { charCount, wordCount, sentenceCount, paragraphCount };
};

export default useCountText;
