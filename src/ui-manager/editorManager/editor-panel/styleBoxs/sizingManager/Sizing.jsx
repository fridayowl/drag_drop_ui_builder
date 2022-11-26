import React from 'react'
import { UpdatedCssAppend } from './../../../../../utils/updateAndAppendCss';
import { useSelector } from 'react-redux';

const Sizing = () => {
    const style = useSelector(state => state.styleFields);
    const handleChange = (e) => {
        let cssProperty = { [e.target.name]: e.target.value };
        UpdatedCssAppend(cssProperty, style);
    }
    return (
        <details open={true}>
            <summary><strong>Sizing</strong></summary>
            <p>Sizing</p>
            <div>
                <div>
                    <span>Width:</span>
                    <input type="text" name="width" onChange={handleChange} />{"px"}
                </div>
                <div>
                    <span>Height:</span>
                    <input type="text" name="height" onChange={handleChange} />{"px"}
                </div>
            </div>
        </details>
    )
}

export default Sizing