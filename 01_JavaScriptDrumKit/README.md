# JS Drum Kit | Better JavaScript30

[This project](https://ivanajeo.github.io/better-javascript30/01_JavaScriptDrumKit/) was initially based on [WesBos JavaScript30](https://javascript30.com/), but has been recreated and made better by me.

In the tutorial code, I noticed that if the keyboard button is held down for an extended period, the .playing class remains active, causing the visual border to stay even after the button is released.

To address this, I added a keyup event listener and a function to ensure that the .playing class is removed as soon as the keyboard button is released.

I decided to keep the transitionend event listener to maintain smooth visual consistency.