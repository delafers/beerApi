import React from 'react';
import { Formik } from 'formik';
import {useDispatch} from "react-redux";
import {getBeersData} from "../../../redux/beer-reducer";
import "./Finder.scss"

const Finder = () => {
    let dispatch = useDispatch()
    let getBeersDataA = (name) => {
        dispatch(getBeersData(name))
    }
    return (
        <div className={"formik"}>
            <Formik
                initialValues={{ beer: '' }}
                onSubmit={(values, { setSubmitting, resetForm }) => {

                    getBeersDataA(values.beer)
                    resetForm()
                }}
            >
                {({   values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting}) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            name="beer"
                        />
                        <button type="submit" >
                            Submit
                        </button>

                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Finder;
