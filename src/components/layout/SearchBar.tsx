import { SearchRounded } from '@mui/icons-material'
import React from 'react'
import { InputWrap, Wrapper, InputArea } from '../../styles/SearchBar.styles'

const SearchBar = () => {
    return (
        <Wrapper>
            <InputWrap>
                <InputArea>
                    <label>
                        Product
                        <input
                            type="text"
                            className="category"
                            placeholder="Search product."
                        />
                    </label>
                </InputArea>
                <span></span>
                <InputArea>
                    <label>
                        Price
                        <select>
                            <option value="Modern & Miniumalist">$0 - max</option>
                            <option value="lime">below $100</option>
                            <option value="coconut">$100 - $1000</option>
                            <option value="mango">$1000- $5000</option>
                        </select>
                    </label>
                </InputArea>
                <div className="input-button">
                    <button className="button"><SearchRounded /></button>
                </div>
            </InputWrap>
        </Wrapper>
    )
}

export default SearchBar
