

const Drawer = () => {
    const isOpen = false

    return (
    (isOpen? (
        <div className = "open">
        </div>
    ):(
        <div className = "closed">
            <button>
                <img  src = " " alt = "shopping cart" />
            </button>
        </div>
    ))
    )
}

export default Drawer
