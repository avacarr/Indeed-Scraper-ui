
const puppeteer = require('puppeteer')
const Users = require('../models/Users');



const update = async (req, res) => {
    //console.log(req.body.user)
    await Users.findByIdAndUpdate(req.body.user._id, req.body.user)
    res.json()
}

const getAllURL = async (req, res) => {
    
}

const getURL = async (req, res) => {
    const url = req.body.url
    console.log("url", url)
    let out = await scrape(url)
    res.json(out)
}

async function scrape(url) {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36')
    await page.goto(url, {waitUntil: 'domcontentloaded'});
    page.on('console', async (msg) => {
        const msgArgs = msg.args();
        for (let i = 0; i < msgArgs.length; ++i) {
          console.log(await msgArgs[i].jsonValue());
        }
      });
    let out = await page.evaluate(() => {
        let elements1 = Array.from(document.querySelectorAll('.resultContent a'));
        let elements2 = Array.from(document.querySelectorAll('.resultContent'));
        var links = elements1.map(el => {return el.id.split('_')[1]})
        var description = elements2.map(el => {return el.innerText.split('\n')})
        for (var i = 0; i < description.length; i++) {
            for (var j = 0; j < description[i].length; j++) {
                if (description[i][j].includes('+') || description[i][j] == 'new') {
                    description[i].splice(j, 1);
                }
            }
        }
        links = links.filter(el => {return el != null})
        links = links.map(el => "https://www.indeed.com/viewjob?jk=" + el)
        return {
            links: links,
            description: description
        }
    });
    out.rating = []
    //out.
    for (let i = 0; i < out.description.length; ++i) {
        text = out.description[i][1]
        if (text.indexOf(".") === text.length - 2) {
            out.rating[i] = text.match(/(\d+)/)[0] + "." + text.match(/(\d+)/)[1]
            out.description[i][1] = text.substring(0, (text.length - 3))
        } else { out.rating[i] = [0]}
    }
    await browser.close();
    return out
}

module.exports = {
    getAllURL,
    getURL,
    update
}