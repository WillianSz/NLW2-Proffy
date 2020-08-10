        // Search for the button 
        document.querySelector("#add-time")
            // When you click the button
            .addEventListener("click", cloneField)
            // Executar uma ação 
        function cloneField() {
            // Perform an action
            const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
                // take the fields 
            const fields = newFieldContainer.querySelectorAll('input')
                // iterar = repiet
            fields.forEach(function(field) {
                    // clear the fields
                    field.value = ""
                })
                // put on page
            document.querySelector('#schedule-items').appendChild(newFieldContainer);
        }