Inspired by [this HN post](https://news.ycombinator.com/item?id=18110363)
(from [this blog post](https://tehaurum.wordpress.com/2018/09/30/an-innovative-phishing-style/)),
I went looking at tradeit.cash.

This repo hosts the decoded JavaScript blobs (the `code*.deobf.js`
files) as well as a `wget` mirror of the site and the phishing frame.

The site's dead now (domain deleted) but many similar scams still
continue to exist. This particular one is notable because it pops up a
Steam login page inside a fake popup window with fake browser chrome.
This feature is controlled by variable "iuHy6d6Yhhdyh82hHgthjd29Uh8"
inside code2.deobf.js, which is sent by the server - if set to `true`
(the default) then the fake browser chrome is generated; otherwise, the
phishing Steam login page is opened in a standard popup window (and will
thereby show the phishing site's URL in the address bar).
