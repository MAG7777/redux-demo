import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../actions/dataAction";

export default function Counter() {

    const count = useSelector((state) => state.count);
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleIncrement = () => {
        dispatch(increment());
    }

    return (
        <div>
            <button onClick={handleDecrement}>DEC -</button>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>INC +</button>
            <div>
                {
                    data.map((item, index)=>{
                        return(
                            <h3 key={index}>
                                {item}
                            </h3>
                        )
                    })
                }
            </div>
        </div>
    )
}