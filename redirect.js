const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const url = params.url;
const domain = params.domain;
const body = $("body");
body.append(`
<h1>You're leaving techprivacy.net</h1>
<h3 class="mt-4">You're about to leave techprivacy.net to visit ${domain}</h3>
<p class="mt-4">${domain} will process your data in accordance with their privacy policy</p>
<a class="btn btn-success" href="${url}">I understand</a>
<br>
<a class="btn btn-danger mt-4" href="${document.referrer}">Go back</a>
`);