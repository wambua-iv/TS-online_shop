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
                            <option value="Modern & Miniumalist">$6000 - $12000</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
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
