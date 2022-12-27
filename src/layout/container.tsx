import React, { FunctionComponent } from "react"
import { Route, Routes } from "react-router-dom";
import { GLOBAL_ROUTES } from "../const/routes";
import { IRoute } from "../models/routes";

const Container: FunctionComponent = () => {
    return (
        <>
            {GLOBAL_ROUTES.map((route: IRoute, index: number) => {
                return (
                <div className="containerStyle" key={index}>
                     <Routes>
                    <Route key={route?.name} path={route?.path} element={<route.component />} />
                </Routes>
                </div>    
               
                )
            })
            }

        </>
    )
}

export default Container;