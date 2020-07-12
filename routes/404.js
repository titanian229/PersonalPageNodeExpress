module.exports = (req, res) => {
    console.log('404 page loaded for ', req.url);
    res.status(404);

    if (req.accepts('html')) {
        res.render('404', { url: req.url, styles: ['404.css'], title: '404' });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
};
