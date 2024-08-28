# Interactive Image Customizer | Better JavaScript30

[This project](https://ivanajeo.github.io/better-javascript30/03_CssVariables/) was initially based on [WesBos JavaScript30](https://javascript30.com/), but has been recreated and made better by me.

In this project, I made some small design changes to improve the look.

I also simplified the event listeners on the inputs by switching from two—`change` and `transitionend`—to just one, `input`.

The `change` event only triggers after you release the slider, so the original code also used `transitionend` to handle real-time updates.

However, the `input` event listener alone can effectively handle both tasks, as it fires continuously while the user is dragging the slider.

Additionally, I added a new input, `size`, to allow for the adjustment of the image size.