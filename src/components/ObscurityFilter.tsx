interface Props {
    initialObscurity: number,
    setObscurity: (value:number) => void
}

export default function ObscurityFilter({ initialObscurity, setObscurity }:Props) {
    return (
        <div className="flex justify-center items-center">
            <div>Well Known</div>
            <input type="range" min="1" max="6" value={initialObscurity} onChange={(e) => setObscurity(Number(e.target.value))} className="obscurity-level" />
            <div>Obscure</div>
        </div>
    )
}