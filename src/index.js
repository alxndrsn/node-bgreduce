module.exports = (collection, reduceFunction, initialValue) =>
  collection.reduce((promiseChain, collectionValue) =>
    promiseChain.then(
      acc => new Promise((resolve, reject) =>
        setTimeout(() => {
          try {
            resolve(reduceFunction(acc, collectionValue));
          } catch(err) {
            reject(err);
          }
        }))),
    Promise.resolve(initialValue));
