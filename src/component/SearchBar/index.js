export default function index({onChange,onClick,onSubmit}) {
    return(
        <>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} name="input"/>
            <button type="submit" onClick={onClick}>Button</button>
        </form>
        </>
    )
};
