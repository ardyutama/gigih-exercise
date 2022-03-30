export default function index({value,onClick}) {
    const onChange = (e) => {
        value(e.target.value);
    }
    return(
        <>
            <input onChange={onChange}/>
            <button type="submit" onClick={onClick}>Button</button>
        </>
    )
};
