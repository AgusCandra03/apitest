exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello World!</h1>');
};

exports.greeting = (req, res, next) => {
    res.send('<h2>Good morning...</h2>');
};