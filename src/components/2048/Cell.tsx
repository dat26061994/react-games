const Cell = (props: any) => {
    const { number } = props;

    return (
        <div className={`cell cell-${number}`}>{number > 0 ? number : ""}</div>
    );
}

export default Cell;