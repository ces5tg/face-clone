import * as React from 'react';

export interface IInputSearchProps {
    placeholder?: string;
    onChange?: (value: string) => void;
    value?: string;
}

const InputSearch: React.FC<IInputSearchProps> = (props) => {
    const { placeholder, onChange, value } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className=' flex items-center bg-gray-100 rounded-full flex-1' >
            <i className='px-2 fas fa-search'></i>
            <input
                className='outline-none p-2 w-full bg-transparent'
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange} />

        </div>)

}
export default InputSearch