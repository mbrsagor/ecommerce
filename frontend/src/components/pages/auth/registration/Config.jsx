const Navigation = (props) => {
    return (
        <div>
            <button onClick={props.next}>Continue</button>
            <button onClick={props.back}>Back</button>
        </div>
    )
}

export const config = {
    navigation: {
        component: Navigation,
        // location: "after"
    }
}
