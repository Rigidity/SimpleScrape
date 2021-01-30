# SimpleScrape - Web-scraping made easy
Using and setting up SimpleScrape is as easy as 1, 2, 3!

# Getting started
```
const SimpleScrape = require('SimpleScrape');

SimpleScrape.browser('chrome'); // Select web browser
SimpleScrape.gotoWebsite('http://google.com'); // Go to a website
SimpleScrape.get('q', true, ["Hi", Keys.RETURN]); // Parameters: element, send keys?, keys to send
```

## Use webdriver-manager to update, if you get an update error!
