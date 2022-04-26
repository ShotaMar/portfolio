import TextBox from "./TextBox"

const Search = () => {
    return (
        <div className="search-container">
            <TextBox />
            <form>
                <input type='text' />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Search