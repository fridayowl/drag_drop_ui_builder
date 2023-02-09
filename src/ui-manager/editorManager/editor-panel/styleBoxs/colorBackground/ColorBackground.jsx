import React from 'react'
import { useSelector } from 'react-redux';
import { UpdatedCssAppend } from './../../../../../utils/updateAndAppendCss';
import { handlePostHtml } from '../../../../../services/api';

const ColorBackground = () => {
    const style = useSelector(state => state.styleFields);
    const siteSettings = useSelector(state => state.siteSettings);
    const handleChange = (e) => {
        let cssProperty = { [e.target.name]: e.target.value };
        UpdatedCssAppend(cssProperty, style);
    }
    return (
        <details open={false}>
            <summary><strong>color and background</strong></summary>
            <p>color and background</p>
            <div>
                <span>color:</span>
                <input type="color" name="color" defaultValue="#ff0000" onBlur={(e)=>handleChange(e)} />
            </div>
            <div>
                <span>background:</span>
                <input type="color" name="background-color" defaultValue="#ff0000" onBlur={(e)=>handleChange(e)} />
            </div>
            <div>
                <span>background-image:</span>
                <input type="file" name="background-image" defaultValue="" onChange={(e)=>handleChange(e)} />
            </div>
        </details>
    )
}

export default ColorBackground