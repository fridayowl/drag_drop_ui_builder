import React from 'react'
import { useSelector } from 'react-redux';
import { UpdatedCssAppend } from './../../../../../utils/updateAndAppendCss';
import { handlePostHtml } from '../../../../../services/api';

const BorderManagement = () => {
    const siteSettings = useSelector(state => state.siteSettings);

    const style = useSelector(state => state.styleFields);
    const handleChange = (e) => {
        let cssProperty = { [e.target.name]: e.target.value };
        UpdatedCssAppend(cssProperty, style);
        handlePostHtml(siteSettings);
    }
    return (
        <details open={false}>
            <summary><strong>Border</strong></summary>
            <div className='border-type'>
                <span>Border:</span>
                <input type="text" name="border_unit_size" onChange={handleChange} />{"px "}
                <span>type:</span>
                <select type="select" name="border" onChange={handleChange} >
                    <option value="solid">solid</option>
                    <option value="none">none</option>
                    <option value="dashed">dashed</option>
                    <option value="doted">doted</option>
                </select>
                <span> border color:</span>
                <input type="color" name="border_color" defaultValue="#ff0000" onChange={handleChange} />
            </div>
            <div className=''>
                <span>Border radius:</span>
                <input type="text" name="border-radius" onChange={handleChange} />{"px"}
            </div>
        </details>
    )
}

export default BorderManagement