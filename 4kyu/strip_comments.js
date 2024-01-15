// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(text, markers) {
  const lines = text.split('\n');

  const result = lines.map((line) => {
    const commentIndex = markers.reduce((index, marker) => {
      const markerIndex = line.indexOf(marker);

      return markerIndex !== -1 && (index === -1 || markerIndex < index)
        ? markerIndex
        : index;
    }, -1);

    if (commentIndex !== -1) {
      line = line.substring(0, commentIndex);
    }

    line = line.replace(/\s+$/, '');

    return line;
  });

  console.log(result);
  return result.join('\n');
}
