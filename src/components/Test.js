import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../actions/dataAction";
import { useState } from "react";

export default function Test() {
    let [value, setValue] = useState('');
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleCLick = () =>{
        dispatch(addItem(value));
        setValue('');
    }

    return (
        <>
            ANKAX COMPONENT
            <h1 style={{ color: "red" }}>
                {count}
            </h1>

            <input type="text"
                placeholder="Input text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }} />
            <button onClick={handleCLick}>ADD ITEM</button>
        </>

    )
}