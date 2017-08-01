import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Foo from 'components/Foo';

export default function(AppComponent) {
    return class RoutedApp extends React.Component {
        render() {
            return (
                <BrowserRouter>
                    <AppComponent>
                        <Route
                            exact
                            path={'/'}
                            component={Foo}
                        />
                    </AppComponent>
                </BrowserRouter>
            );
        };
    };
};