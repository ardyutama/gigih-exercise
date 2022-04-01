export default function index({onChange,onClick}) {
    return(
        <>
            <input onChange={onChange}/>
            <button type="submit" onClick={onClick}>Button</button>
        </>
    )
};
