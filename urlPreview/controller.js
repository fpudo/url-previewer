const rp = require('request-promise');
const cheerio = require('cheerio');

module.exports.getPreview = (req, res, next) => {
    const { url } = req.query;

    rp(url).then((html) => {
        const $ = cheerio.load(html);
        res.status(200);
        // const metas = [];
        // $('meta').each((i, el) => {
        //     if ('property' in el.attribs) {
        //         metas.push({ [el.attribs.property]:  el.attribs.content })
        //     }
        // })
        req.contentReturn = {
            "title": $('meta[property="og:title"]').attr('content'),
            "image": $('meta[property="og:image"]').attr('content'),
            "description": $('meta[property="og:description"]').attr('content').trimLeft(),
            "siteIcon": $('link[rel="mask-icon"]').attr('href'),
        }
        return next();
    }).catch(err => console.log(err));
}