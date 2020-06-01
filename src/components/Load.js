import React from 'react';

function Load(props) {
    return (
        // Get the User Id from the UserContext.
        // Retrieve all saved files for that Id from local storage.
        // Display all saved files
        // It appears this component is doing a very similar thing to the Save function component.
        // It would be best to just have a load/save component and pass a 
        //      flag of whether to load or save to the component.
        // It'll probably be more DRY that way.
        <div>
           Load Files Here 
        </div>
    );
}

export default Load;