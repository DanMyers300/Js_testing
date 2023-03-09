function ask(options) {
    return new Promise(async function(resolve) {

        function wait(ms = 0) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }

        const popup = document.createElement(`form`);
        popup.classList.add(`popup`);
        popup.insertAdjacentHTML(
            "afterbegin", `
              <fieldset>
                <label>${options.title}</label>
                <input type="text" name="input" />
                <button type="submit">Submit</button>
              </fieldset>
            `
          );

        if (options.cancel) {
            const skipButton = document.createElement(`button`);
            skipButton.type = `button`;
            skipButton.textContent = `Cancel`;
        }

        document.body.appendChild(popup);
        await wait(50);
        popup.classList.add(`open`);

});
}

ask({title: ' does this work'})
