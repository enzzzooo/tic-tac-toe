export default function Square() {
    const squares = []; // for some reason, have to make it into an array
    for (let i = 0; i < 9; i++){
        squares.push(<button className="w-50 h-50" key={i}>X</button>);
    }
    return (
        <div className="grid grid-cols-3 grid-rows-3 mx-auto w-1/2 h-1/2">
            {squares}
        </div>
    );
    }
