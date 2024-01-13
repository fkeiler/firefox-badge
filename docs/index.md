# `<firefox-badge>`

This is a web component which tries to recreate an old "Get Firefox" badge that was shown on website footers as a way to signal the website author's support of Mozilla's software. This was the original gif:

![Safer, Faster, Better. The browser you can trust. Rediscover the web. Get Firefox](./img/firefoxblend.gif)

And this is the recreation:

<firefox-badge></firefox-badge>

To use it on your website is simple. You just have to add the following code:

```html
<script type="module">
// Another CDN could be used here, or you could also download it from npm
import FirefoxBadge from "https://esm.run/firefox-badge"

customElements.define("firefox-badge", FirefoxBadge)
</script>
```

After that you can create the element by simply adding:

```html
<firefox-badge></firefox-badge>
```

wherever you want it to be placed

<script type="module">
import FirefoxBadge from "https://esm.run/firefox-badge"

customElements.define("firefox-badge", FirefoxBadge);
</script>
