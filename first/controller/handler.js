// Redirect to new page
exports.newpage = function (req, res, next)
{
    res.render('newpage', {data:req.body});
}

exports.home = function (req, res, next)
{
    res.render('index');
}
