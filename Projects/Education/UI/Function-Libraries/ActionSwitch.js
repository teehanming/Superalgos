function newEducationActionSwitch() {

    let thisObject = {
        executeAction: executeAction,
        initialize: initialize,
        finalize: finalize
    }

    return thisObject

    function finalize() {

    }

    function initialize() {
        /* Nothing to initialize since a Function Library does not hold any state. */
    }

    async function executeAction(action) {
        switch (action.name) {
            case 'Action Name': {
                // Example: return UI.projects.foundations.functionLibraries.onFocus.getNodeThatIsOnFocus(action.node)
            }
        }
    }
}
