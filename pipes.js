const { pipe, of, empty } = require("rxjs");
const { mergeMap, map } = require("rxjs/operators");

function incrementalBuffer({ maxItems, minItems, incrementCountBy }) {
  let buffer = [];
  let emitCountdown = minItems || incrementCountBy;

  return pipe(
    mergeMap((item) => {
      buffer.push(item);
      emitCountdown--;

      if (emitCountdown === 0) {
        emitCountdown = incrementCountBy;
        buffer = buffer.slice(-maxItems);
        return of(buffer);
      }

      return empty();
    })
  );
}

function averageScoreBuffer({
  maxItems = 10,
  minItems = 5,
  incrementCountBy = 5,
} = {}) {
  return pipe(
    map((metric) => metric.probability),
    incrementalBuffer({
      maxItems,
      minItems,
      incrementCountBy,
    }),
    map((probabilities) => {
      return (
        probabilities.reduce((acc, probability) => acc + probability) /
        probabilities.length
      );
    }),
    map((average) => Math.trunc(average * 100))
  );
}

module.exports = {
  averageScoreBuffer,
};
