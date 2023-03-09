function ask(options) {
    return new Promise(async function(resolve) {

        function wait(ms = 0) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function destroyPopup(popup) {
            let myPopup = popup;
            popup.classList.remove(`open`);
            await wait(1000);
            popup.remove();
            myPopup = null;
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
            popup.firstElementChild.appendChild(skipButton);
            skipButton.addEventListener(
                'click',
                function() {
                  resolve(null);
                  destroyPopup(popup);
                },
                {once:true}
              );
        }

        document.body.appendChild(popup);
        await wait(50);
        popup.classList.add(`open`);

        popup.addEventListener(`submit`, function(e) {
            e.preventDefault();
            console.log(e.target.input.value);
            destroyPopup(popup);
        }, { once: true });
});
}

async function askQuestion(e){
        const button = e.currentTarget;
    const shouldCancel = 'cancel' in button.dataset;
    const answer = await ask({
      title: button.dataset.question,
      cancel: shouldCancel
    });
    questions.forEach(async function() {
        console.log('Asking a question');
        console.log(question);
        const answer = await ask(question);
        console.log(answer);
      })
      async function askMany() {
        for (const question of questions) {
          const answer = await ask(question);
          console.log(answer);
        }
      }
      askMany();
};


const buttons = document.querySelectorAll(`[data-question]`);
buttons.forEach(button => button.addEventListener(`click`, askQuestion));
