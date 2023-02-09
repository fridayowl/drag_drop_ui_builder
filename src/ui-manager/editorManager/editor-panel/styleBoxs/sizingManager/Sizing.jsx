import React from 'react'
import { UpdatedCssAppend } from './../../../../../utils/updateAndAppendCss';
import { useSelector } from 'react-redux';
import { handlePostHtml } from '../../../../../services/api';

const Sizing = () => {

    const style = useSelector(state => state.styleFields);
    const siteSettings = useSelector(state => state.siteSettings);
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
                    <input type="text" name="width" onChange={handleChange} onBlur={()=>handlePostHtml(siteSettings)} />{"px"}
                </div>
                <div>
                    <span>Height:</span>
                    <input type="text" name="height" onChange={handleChange} onBlur={()=>handlePostHtml(siteSettings)} />{"px"}
                </div>
            </div>
        </details>
    )
}

export default Sizing