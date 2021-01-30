# SimpleScrape - Web-scraping made easy
Using and setting up SimpleScrape is as easy as 1, 2, 3!

# Getting started
```js
const SimpleScrape = require('SimpleScrape');

SimpleScrape.browser('chrome'); // Select web browser
SimpleScrape.goto('http://google.com'); // Go to a website
SimpleScrape.get('q', true, ["Hi", Keys.RETURN]); // Parameters: element, send keys?, keys to send
```

# Docs
`browser()` - Sets the web browser to use <br>
`goto()` - Goes to a website <br>
`get()` - Get an element on the website, send keys (third param.) if true (second param.)

### Use webdriver-manager to update, if you get an update error!

**For developers using this GitHub: SimpleScrape uses selenium-webdriver**
