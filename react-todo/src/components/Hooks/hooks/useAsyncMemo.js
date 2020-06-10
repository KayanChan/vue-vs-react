import React from "react";

export default (factory, deps, initial) => {
    const [state, setState] = React.useState([initial]);

    React.useEffect(() => {
        let cancel = false;

        factory()
            .then(val => {
                if (!cancel) {
                    setState([val]);
                }
            })
            .catch(err => {
                if (!cancel) {
                    setState([null, err]);
                }
            });

        return () => {
            cancel = true;
        };
    }, deps);

    return state;
};