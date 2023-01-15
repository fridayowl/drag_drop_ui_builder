import React from 'react'
import { useSelector } from 'react-redux';
import { UpdatedCssAppend } from './../../../../../utils/updateAndAppendCss';

const ColorBackground = () => {
    const style = useSelector(state => state.styleFields);
    const handleChange = (e) => {
        console.log("time")
        let cssProperty = { [e.target.name]: e.target.value };
        UpdatedCssAppend(cssProperty, style);
    }
    return (
        <details open={false}>
            <summary><strong>color and background</strong></summary>
            <p>color and background</p>
            <div>
                <span>color:</span>
                <input type="color" name="color" defaultValue="#ff0000" onBlur={handleChange} />
            </div>
            <div>
                <span>background:</span>
                <input type="color" name="background-color" defaultValue="#ff0000" onBlur={handleChange} />
            </div>
            <div>
                <span>background-image:</span>
                <input type="file" name="background-image" defaultValue="" onChange={handleChange} />
            </div>
        </details>
    )
}

export default ColorBackground