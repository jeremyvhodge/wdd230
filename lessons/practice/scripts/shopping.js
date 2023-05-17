      const list = document.querySelector('#list');
      const input = document.querySelector('#item');
      const button = document.querySelector('#button');

      function addItem() {
        const inputValue = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const span = document.createElement('span');
        const deleteButton = document.createElement('button');

        listItem.appendChild(span);
        listItem.appendChild(deleteButton);

        span.textContent = inputValue;
        deleteButton.textContent = 'Delete';

        list.appendChild(listItem);

        deleteButton.addEventListener('click', function() {
          list.removeChild(listItem);
        });

        input.focus();
      }

      // Attach the addItem function to the button's click event
      button.addEventListener('click', addItem);